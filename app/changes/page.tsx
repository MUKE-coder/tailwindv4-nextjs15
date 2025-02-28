import React from "react";

export default function page() {
  return (
    <div>
      <p className="line-clamp-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla iusto
        dignissimos, eius ex omnis consectetur qui tenetur quos repellendus, hic
        aperiam voluptates. Autem ullam sequi quis magnam ipsa mollitia,
        officiis quia aliquid repudiandae et molestias odit fuga voluptatum,
        adipisci recusandae! Animi blanditiis, sint fugit aperiam incidunt
        ratione perspiciatis quisquam nemo tempora ipsum at cupiditate
        reiciendis est rem vel eius voluptas adipisci? Eaque officia unde
        adipisci voluptatum, tenetur natus minima eum vero dignissimos quisquam
        ad, accusamus et dicta ipsam iure quam atque odit perspiciatis explicabo
        magnam qui quis ab! Iure rem veniam a ipsam, ut temporibus illum quidem
        minima rerum vitae?
      </p>
      <div className="grid grid-cols-4 gap-4 p-8">
        <div className="size-16  bg-radial from-pink-400 from-40% to-fuchsia-700 rounded-full bg-purple-800/50 "></div>
        <div className="w-16 h-16 rounded-full bg-purple-800"></div>
        <div className="w-16 h-16 rounded-full bg-purple-800"></div>
        <div className="w-16 h-16 rounded-full bg-purple-800"></div>
      </div>
    </div>
  );
}
