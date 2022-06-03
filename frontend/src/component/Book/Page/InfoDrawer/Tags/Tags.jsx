import React, { useState } from "react";
import { Tag, Input, notification } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { observer } from "mobx-react";
import axios from "axios";

import { displayStore } from "../../../../../stores/displayStore";
import { authStore } from "../../../../../stores/authStore";
import "./Tags.css";

const Tags = observer((props) => {
  const [tags, setTags] = useState(props.tags);
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState("");
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const patchTagsInDB = (tags) => {
    async function patchEntry(tags) {
      const response = await axios({
        url: process.env.API_URL + "/song/" + props.id,
        method: "PATCH",
        data: { tags: tags },
      });
      if ((response.status !== 200) & (response.status !== 201)) {
        throw new Error("Error!");
      }
      const patchResult = await response.data;
      return patchResult;
    }
    // fetch Entries
    patchEntry(tags)
      .then((resData) => {
        //console.log("Sucess", resData);
      })
      .catch((error) => {
        authStore.logout();
        notification.error({ description: `Unauthorized! Please login.` });
        console.log("error", error.message);
      });
  };

  const handlerDeleteTag = (deleteTagIndex) => {
    let oldTags = tags;
    oldTags.splice(deleteTagIndex, 1);
    setTags(oldTags);
  };

  const handleEditInputConfirm = (e) => {
    tags[editInputIndex] = editInputValue.toLowerCase();
    setTags(tags);
    patchTagsInDB(tags);
    setEditInputIndex(-1);
    setEditInputValue("");
    setInputValue("");
    setInputVisible(false);
    props.setTagsMissing(false);
    displayStore.setIsInEditMode(false);
  };

  const handleEditInputCancel = (e) => {
    setEditInputIndex(-1);
    setEditInputValue("");
    setInputValue("");
    setInputVisible(false);
    displayStore.setIsInEditMode(false);
  };

  const handleEditInputChange = (e) => {
    setEditInputValue(e.target.value);
    setInputValue("");
    setInputVisible(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = (e) => {
    const inputValue = e.target.value.toLowerCase();
    if (tags === undefined || tags === null) {
      const newtags = [inputValue];
      patchTagsInDB(newtags);
      setTags(newtags);
    } else if (inputValue && tags.indexOf(inputValue) === -1) {
      const newtags = [...tags, inputValue];
      patchTagsInDB(newtags);
      setTags(newtags);
    }
    setInputValue("");
    setInputVisible(false);
    setEditInputIndex(-1);
    setEditInputValue("");
    props.setTagsMissing(false);
    props.setPageHasChanged("true");
    displayStore.setIsInEditMode(false);
  };

  const handleInputCancel = () => {
    setInputValue("");
    setInputVisible(false);
    setEditInputIndex(-1);
    setEditInputValue("");
    displayStore.setIsInEditMode(false);
  };

  const showInput = () => {
    displayStore.setIsInEditMode(true);
    setInputVisible(true);
    setEditInputIndex(-1);
    setEditInputValue("");
  };

  const formattedTags = tags
    ? tags.map((tag, index) => {
        const isLongTag = tag.length > 30;
        if (editInputIndex === index) {
          return (
            <Input
              key={index}
              className="input-tag"
              size="small"
              value={editInputValue}
              onChange={handleEditInputChange}
              onBlur={handleEditInputCancel}
              onPressEnter={handleEditInputConfirm}
            />
          );
        }

        return (
          <Tag
            className="edit-tag"
            key={index}
            closable={authStore.hasAccess}
            onClose={() => handlerDeleteTag(index)}
          >
            <span
              onDoubleClick={(e) => {
                displayStore.setIsInEditMode(true);
                setEditInputIndex(index);
                setEditInputValue(tag);
                e.preventDefault();
              }}
            >
              {isLongTag ? `${tag.slice(0, 30)}...` : tag}
            </span>
          </Tag>
        );
      })
    : [];

  return (
    <div className="tags">
      {formattedTags}
      {inputVisible && (
        <Input
          type="text"
          className="input-tag"
          size="small"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputCancel}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && authStore.hasAccess && (
        <Tag className="site-tag-plus" onClick={showInput}>
          <PlusOutlined /> Add Tag
        </Tag>
      )}
    </div>
  );
});

export default Tags;
