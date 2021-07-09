import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";

const List = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <div>
      {data.items.map((e) => {
        const post = state.source[e.type][e.id];
        return (
          <Link key={e.id} link={e.link}>
            {post.title.rendered}
            <br />
          </Link>
        );
      })}
    </div>
  );
};

export default connect(List);
 