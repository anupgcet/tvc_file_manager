import DeleteIcon from "@mui/icons-material/Delete";
import FolderIcon from "@mui/icons-material/Folder";
import { Divider, ListItemButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import * as React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import FileOpenIcon from "@mui/icons-material/FileOpen";

const data = [
    {
        id: 1,
        fileName: "textFile_v1_.txt",
        modifiedDate: "Jan 2022 12 : 11:22",
    },
    {
        id: 2,
        fileName: "textFile_v1_.txt",
        modifiedDate: "Jan 2022 12 : 11:22",
    },
    {
        id: 3,
        fileName: "textFile_v1_.txt",
        modifiedDate: "Jan 2022 12 : 11:22",
    },
];

const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

export default function FlatFileList() {
    function handleFileOpen() {
        // Implement your file opening logic here
        // For example, you can use the HTML input element with type=file
        const input = document.createElement("input");
        input.type = "file";
        input.click();
    }
    return (
        <Box>
            <Grid container>
                <Grid item xs={12}>
                    {/* <Typography
                        sx={{ mt: 4, mb: 2 }}
                        variant="h6"
                        component="div"
                    >
                        Avatar with text and icon
                    </Typography> */}
                    <Demo>
                        <List>
                            {data.map((m) => (
                                <>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <FolderIcon
                                                    sx={{ color: "primary" }}
                                                />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <Typography>{m.fileName}</Typography>
                                        <Box
                                            sx={{
                                                marginLeft: "auto",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <FileOpenIcon
                                                onClick={handleFileOpen}
                                                sx={{
                                                    color: "primary.main",
                                                    mx: 1,
                                                }}
                                            />
                                            <CheckCircleOutlineIcon
                                                sx={{
                                                    color: "primary.main",
                                                    mx: 1,
                                                }}
                                            />
                                            <DeleteIcon
                                                sx={{
                                                    color: "primary.main",
                                                    mx: 1,
                                                }}
                                            />
                                        </Box>
                                    </ListItem>
                                    <Divider />
                                </>
                            ))}
                        </List>
                    </Demo>
                </Grid>
            </Grid>
        </Box>
    );
}
