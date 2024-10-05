import { ButtonGroup } from "@material-tailwind/react";
import { Button } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { animated, useSpring } from "@react-spring/web";
import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";
import * as React from "react";
import getAllCVs from "../utils/services/getAllCVs";
import Btn from "./Button";

const Fade = React.forwardRef(function Fade(props, ref) {
    const { children, in: open, onClick, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter(null, true);
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited(null, true);
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {React.cloneElement(children, { onClick })}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element.isRequired,
    in: PropTypes.bool,
    onClick: PropTypes.any,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
    ownerState: PropTypes.any,
};

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "#444444",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: 3,
    color: "#ffff",
};

export default function CVModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { data: resumes, isLoading } = useQuery({
        queryFn: () => getAllCVs(),
        queryKey: ["resume"],
    });

    const handleDownload = (file) => {
        const link = document.createElement("a");
        link.href = file;
        link.download = file;
        link.click();
    };

    return (
        <div>
            <Btn
                onClick={handleOpen}
                className="py-1 px-4 border-2 rounded-full hover:bg-white transition-all hover:text-leftSide"
            >
                Download Resume
            </Btn>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        TransitionComponent: Fade,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography
                            id="spring-modal-title"
                            variant="h6"
                            component="h2"
                            sx={{ textAlign: "center" }}
                        >
                            Select Resume To Download
                        </Typography>
                        <Typography
                            id="spring-modal-description"
                            sx={{ mt: 2 }}
                        >
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <ButtonGroup
                                    variant="outlined"
                                    aria-label="Basic button group"
                                >
                                    {resumes
                                        ? resumes?.map((el) => {
                                              return (
                                                  <Button
                                                      sx={{
                                                          mx: 1,
                                                          "&:hover": {
                                                              backgroundColor:
                                                                  "primary.light",
                                                              borderColor:
                                                                  "primary.dark",
                                                              color: "white",
                                                          },
                                                      }}
                                                      key={el.id}
                                                      onClick={() =>
                                                          handleDownload(
                                                              el.file
                                                          )
                                                      }
                                                  >
                                                      {el.name}
                                                  </Button>
                                              );
                                          })
                                        : isLoading}
                                </ButtonGroup>
                            </Box>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
