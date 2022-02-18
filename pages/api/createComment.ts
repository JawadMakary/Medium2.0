import type { NextApiRequest, NextApiResponse } from "next";
import sanityClient from "@sanity/client";
const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-03-25",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_AUTH_TOKEN,
};
const client = sanityClient(config);

export default async function createComment(
  req: NextApiRequest,
  res: NextApiResponse
) 

{
  const { _id, name, email, comment } = req.body;
  
  try {
    //   create a doc in sanity cms
    await client.create({
      _type: "comment",
      post: {
        _type: "reference",
        _ref: _id,
      },
      name,
      email,
      comment,
    });
  } catch (error) {
    // console.log("data of body ", req.body)
    return res.status(500).json({
      message: "comment could not be submitted",
      error,
    });
  }
  console.log("submitted");
  res.status(200).json({ message: "comment submitted succesfully" });
}
