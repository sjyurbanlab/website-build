import React, { FC } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';

interface VideoPlayerProps extends ReactPlayerProps {}

export const VideoPlayer: FC<VideoPlayerProps> = (props) => (
  <div>
    <div className={'w-full max-w-xl mx-auto'}>
      <div className={'relative'} style={{ paddingTop: '56.25%' }}>
        <ReactPlayer
          controls={true}
          width={'100%'}
          height={'100%'}
          className={'absolute top-0 left-0'}
          {...props}
        />
      </div>
    </div>
  </div>
);
