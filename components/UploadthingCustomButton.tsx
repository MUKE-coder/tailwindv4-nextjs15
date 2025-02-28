"use client";
import { UploadButton } from "@/lib/uploathing";
import Image from "next/image";
import React, { useState } from "react";

export default function UploadthingCustomButton() {
  const [imageUrl, setImageUrl] = useState("/bg.png");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src={imageUrl}
        alt="This is hero image"
        width={826}
        height={556}
        className="w-1/2"
      />
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res[0].ufsUrl);
          setImageUrl(res[0].ufsUrl);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}
