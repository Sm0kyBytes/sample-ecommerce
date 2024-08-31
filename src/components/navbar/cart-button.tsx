import Image from "next/image";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute" as "absolute",
  top: { xs: "20%", md: "25%" },
  left: { xs: "50%", md: "75%", xl: "83%" },
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  py: 2,
  mx: 1,
};
export default function CartButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="flex flex-grow-0  ">
        <div
          tabIndex={0}
          role="button"
          className="rounded-full mr-5"
          onClick={handleOpen}
        >
          <Image
            src="/Images/icon-cart.svg"
            width={22}
            height={20}
            alt="icon-cart"
            priority
          />
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          BackdropProps={{ invisible: true }}
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ px: 2 }}
            >
              Cart
            </Typography>
            <hr />
            <div id="modal-modal-description" className=" mt-2 px-4">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}
