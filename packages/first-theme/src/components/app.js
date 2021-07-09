import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";
import List from "./list";
import Post from "./post";

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <h1>Hello, Frontity!</h1>
      <h2>current url: {state.router.link}</h2>
      <nav>
        <Link link="/">Home</Link>
        <br />
        <Link link="/page/2">More Posts</Link>
        <br />
        <Link link="/about-us">About Us</Link>
      </nav>
      <hr />
      <main>
        <Switch>
          <List when={data.isArchive} />
          <Post when={data.isPost}>this is a post</Post>
          <Post when={data.isPage}>this is a page</Post>
        </Switch>
      </main>
    </>
  );
};

export default connect(Root);
 