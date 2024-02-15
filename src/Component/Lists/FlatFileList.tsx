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

function generate(element: any) {
    return [0, 1, 2].map((value: any) =>
        React.cloneElement(element, {
            key: value,
        })
    );
}

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
                            {generate(
                                <>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <FolderIcon
                                                    sx={{ color: "primary" }}
                                                />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <Typography>Testing 1123</Typography>
                                        <ListItemButton>
                                            <Box sx={{ display: "flex" }}>
                                                <FileOpenIcon
                                                    onClick={handleFileOpen}
                                                    sx={{ color: "primary" }}
                                                />
                                                <CheckCircleOutlineIcon
                                                    sx={{ color: "primary" }}
                                                />
                                                <DeleteIcon
                                                    sx={{ color: "primary" }}
                                                />
                                            </Box>
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider />
                                </>
                            )}
                        </List>
                    </Demo>
                </Grid>
            </Grid>
        </Box>
    );
}
