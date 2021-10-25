/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import {
  Avatar,
  Divider,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Typography,
} from "@mui/material";

interface ListCardProps {
  image: string;
  trackName?: string;
  artistName: string;
  genre: string;
}

const ListCard: FC<ListCardProps> = ({ image, trackName, artistName }) => {
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={image} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <span
              title={trackName}
              css={css`
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              `}
            >
              {trackName}
            </span>
          }
          secondary={
            <>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="caption"
                color="text.primary"
              >
                {artistName}
              </Typography>
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" />
    </>
  );
};

export default ListCard;
