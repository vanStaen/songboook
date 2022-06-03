import React, { useEffect, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Drawer, Divider } from "antd";
import { observer } from "mobx-react";
import YouTube from "react-youtube";

import Tags from "./Tags/Tags";
import Lyrics from "./Lyrics/Lyrics";
import Links from "./Links/Links";
import Extras from "./Extras/Extras";
import DangerZone from "./DangerZone/DangerZone";
import { authStore } from "../../../../stores/authStore";

import "./InfoDrawer.css";

const isMobile = window.innerWidth <= 768;

const initialDrawerSize = () => {
  let initialDrawerSize = 350;
  if (isMobile) {
    initialDrawerSize = window.innerWidth;
  }
  return initialDrawerSize;
};
const InfoDrawer = observer((props) => {
  const [widthDrawer, setWidthDrawer] = useState(initialDrawerSize());
  const [isDrawerFold, setIsDrawerFold] = useState(true);
  const [player, setPlayer] = useState(null);
  const [artist, setArtist] = useState(props.page.artist);
  const [song, setSong] = useState(props.page.song);

  const videoID = props.page.videourl ? props.page.videourl.split("=")[1] : "";
  const videoOptions = {
    height: isMobile ? window.innerWidth * 0.6 : isDrawerFold ? 227 : 310,
    width: isMobile ? "100%" : isDrawerFold ? 300 : 550,
    playerVars: {
      autoplay: 0,
    },
  };

  // Use effect to fold drawer after close
  useEffect(() => {
    !isMobile && handlerFoldDrawer(isDrawerFold);
  }, [isDrawerFold]);

  const handlerFoldDrawer = (value) => {
    value ? setWidthDrawer(350) : setWidthDrawer(600);
    !isMobile && setIsDrawerFold(value);
  };

  const handlerCloseDrawer = () => {
    setIsDrawerFold(true);
    player && player.pauseVideo();
    props.setDrawerVisible(false);
  };

  const _onReady = (event) => {
    setPlayer(event.target);
  };

  return (
    <Drawer
      title={
        <div>
          {!isMobile &&
            (isDrawerFold ? (
              <>
                <MenuFoldOutlined onClick={() => handlerFoldDrawer(false)} />
                &nbsp;&nbsp;
              </>
            ) : (
              <>
                <MenuUnfoldOutlined onClick={() => handlerFoldDrawer(true)} />
                &nbsp;&nbsp;
              </>
            ))}
          {isDrawerFold
            ? song.toUpperCase()
            : artist.toUpperCase() + " - " + song.toUpperCase()}
          &nbsp;<span style={{ color: "#eee" }}>#{props.page.id}</span>
        </div>
      }
      placement="right"
      closable={true}
      className="InfoDrawer"
      onClose={handlerCloseDrawer}
      visible={props.drawerVisible}
      width={widthDrawer}
    >
      {props.page.videourl ? (
        <YouTube videoId={videoID} opts={videoOptions} onReady={_onReady} />
      ) : (
        <img
          src={props.page.picurl}
          className="Page-drawer__artwork"
          alt="pic_missing"
        ></img>
      )}

      <Divider orientation="left" plain>
        <span className="Page-drawer__diviser">Links</span>
      </Divider>

      <Links
        tabs={props.page.link}
        video={props.page.videourl}
        pic={props.page.picurl}
        id={props.page.id}
        setTabsMissing={props.setTabsMissing}
        setVideoMissing={props.setVideoMissing}
        setPicMissing={props.setPicMissing}
        isDrawerFold={isDrawerFold}
        setPageHasChanged={props.setPageHasChanged}
      />

      <Divider orientation="left" plain>
        <span className="Page-drawer__diviser">Tags</span>
      </Divider>
      <Tags
        tags={props.page.tags}
        id={props.page.id}
        setTagsMissing={props.setTagsMissing}
        setPageHasChanged={props.setPageHasChanged}
      />

      <Divider orientation="left" plain>
        <span className="Page-drawer__diviser">Lyrics</span>
      </Divider>

      <Lyrics id={props.page.id} lyrics={props.page.lyrics} />

      {authStore.hasAccess && (
        <>
          <Divider orientation="left" plain>
            <span className="Page-drawer__diviser">Extras</span>
          </Divider>
          <Extras
            artist={props.page.artist}
            song={props.page.song}
            piano={props.page.piano}
            bass={props.page.bass}
            level={props.page.level}
            setArtist={setArtist}
            setSong={setSong}
            isDrawerFold={isDrawerFold}
            id={props.page.id}
            setIsPiano={props.setIsPiano}
            setIsBass={props.setIsBass}
            setPageHasChanged={props.setPageHasChanged}
          />

          <Divider orientation="left" plain>
            <span className="Page-drawer__diviser">Danger Zone</span>
          </Divider>
          <DangerZone
            id={props.page.id}
            active={props.page.active}
            setPageHasChanged={props.setPageHasChanged}
          />
        </>
      )}
    </Drawer>
  );
});

export default InfoDrawer;
