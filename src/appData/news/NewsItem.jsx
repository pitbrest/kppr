import React from "react";

function newsItem(data) {
  return (
    <article key={data.elem}>
      <div className="flex justify-end gap-2 text-sm ps-6 mb-2">
        <p>{data.author},</p>
        <p>{data.date}</p>
      </div>
      <data.elem />
    </article>
  );
}

export default newsItem;
