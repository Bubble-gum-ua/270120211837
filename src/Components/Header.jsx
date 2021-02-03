import React from "react";
import profileImg from "../Assets/Profileimg.png"
import Grid from "@material-ui/core/Grid";
import {makeStyles, Paper} from "@material-ui/core";
import "./HeadStyles.css"

//styles for header part
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        boxShadow: "none",
    },
    paper: {
        padding: "2px",
        textAlign: 'left',
        color: "",
        border: 0,
        boxShadow: "none"
    },
    img: {
        borderRadius: "50%",
        marginLeft: "46px"
    },
    name: {
        fontSize: "16px",
        fontWeight: "700",
        textAlign: 'left',
        boxShadow: "none",
        paddingLeft: "5px"

    },
    status: {
        fontSize: "12px",
        fontWeight: "400",
        textAlign: 'left',
        boxShadow: "none",
        color: "#808080",
        paddingLeft: "5px"

    },
    description: {
        fontSize: "14px",
        fontWeight: "400",
        textAlign: 'left',
        boxShadow: "none",
        background: "rgba(255, 251, 200, 1)",
        border: "1px solid #DADADA",
        borderRadius: "5px",
        padding: "10px 10px 10px 35px",
        marginTop: "5px",
        marginLeft: "-30px",
        zIndex: "-1",
        position: "relative",
        maxWidth: "300px"
    },
    services: {
        fontsize: "13px",

    }
}));

// service data render parts

const UserInfo = (props) => {
    return (
        <Grid className="graphWrap">
            <Grid item xs={9} className="nameService">
                <div className="nameS"> {props.name}
                </div>
                <div><img className="backgroundImg" src={props.img} alt="ico"/></div>
            </Grid>
            <Grid item xs={3} className="countService">
                <div className="countS"> {props.count} </div>
            </Grid>
        </Grid>
    )
}

// main header render component

const Header = (props) => {
    const classes = useStyles();
    const services = props.posts.services;
    const servicesData = services.map(s => <UserInfo name={s.name} count={s.count} key={s.id} img={s.img}/>)

    function FormRow() {
        return (
            <React.Fragment>
                <div className="headWrapp">
                    <div>
                        <img className={classes.img} src={profileImg} alt="profile"/>
                    </div>
                    <div>
                        <Paper className={classes.name}> Вероника Ростова</Paper>
                        <Paper className={classes.status}> Менеджер по продажам</Paper>
                        <Paper className={classes.description}>
                            Подберу для вас самые лучшие предложения.
                            Мои услуги абсолютно бесплатны
                        </Paper>
                    </div>
                </div>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={8}>
                    <div className="servicesContainer"> Услуг</div>
                    <Grid className="services">{servicesData}</Grid>
                    <div className="result">
                        <Grid item xs={8} className="sumTitle">
                            Всего
                        </Grid>
                        <Grid item xs={4} className="sumCount">
                            15
                        </Grid>
                    </div>
                </Grid>
            </React.Fragment>
        )
    }

    return (
        <div className="mainPageWrap">
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <FormRow/>
                </Grid>
            </Grid>
        </div>
    )
};

export default Header;