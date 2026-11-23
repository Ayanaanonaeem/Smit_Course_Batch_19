import { connectDB } from "@/app/lib/dbConnect";

export async function GET(request) {
    await connectDB();
    return Response.json({
        data:[],
        msg:"Blogs fetched succesfully"
    })
}