import React, {useContext} from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {useNavigate, useLocation} from "react-router-dom";
import MenuOptionsContext from "../contexts/menuOptionsContext";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 1.5,
  },
};

const Header = (props) => {
	const location = useLocation();
	const navigate = useNavigate();

  const title = props.title;
	const menuOptions = useContext(MenuOptionsContext);
	const currentPageIndex = menuOptions.findIndex((option)=>option.path===location.pathname);

	const handleNavigation = (delta) => {
		const newPageIndex = currentPageIndex + delta;
		if (newPageIndex >= 0 && newPageIndex < menuOptions.length) {
			const newPagePath = menuOptions[newPageIndex].path;
			navigate(newPagePath);
		}
		return null;
	};

	const showBackArrow = currentPageIndex > 0;
  const showForwardArrow = currentPageIndex < menuOptions.length - 1;

  return (
    <Paper component="div" sx={styles.root}>

			{showBackArrow 
				?
				<IconButton
        	aria-label="go back"
					onClick={()=>handleNavigation(-1)}
      	>
        	<ArrowBackIcon color="primary" fontSize="large" />
      	</IconButton>
				:
				<IconButton></IconButton>
			}

      <Typography variant="h4" component="h3">
        {title}
      </Typography>

      {showForwardArrow 
				?
				<IconButton
        	aria-label="go back"
					onClick={()=>handleNavigation(1)}
      	>
        	<ArrowForwardIcon color="primary" fontSize="large" />
      	</IconButton>
				:
				<IconButton></IconButton>
			}
    </Paper>
  );
};

export default Header;
