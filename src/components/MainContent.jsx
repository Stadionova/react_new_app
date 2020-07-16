import React from "react";
import classes from "./MainContent.module.css";

const MainContent = () => {
    return (
        <main className={classes.content}>
            <div className={classes.headlinePhoto}>
                <img src="https://news.liga.net/images/general/2019/09/11/20190911155211-5324.jpg?v=1568211567"></img>
            </div>
            <div className={classes.avatarAndDesc}>
                <div>
                    <img src="https://99px.ru/sstorage/56/2019/09/mid_324597_239159.jpg"></img>
                </div>
                <div>Profile Description</div>
            </div>
            <div className={classes.posts}>
                <div>My posts</div>
                <div>Create New Post</div>
                <div>
                    <input></input>
                </div>
                <div>
                    <button>Button</button>
                </div>
            </div>
        </main>
    )
};

export default MainContent;