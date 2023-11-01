import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { QR_CODE_API } from "@/utils/env";
import axios from "axios";
import { redirect } from "next/navigation";

const generateQR = async (formData: FormData) => {
    "use server";
    const response = await axios.post(QR_CODE_API, {
        "prompt": formData.get('description'),
        "url": formData.get('url')
    }, {
        headers: {
            "Cookie": "anonymous-user-id=83b16864-0ac1-4399-b6de-bc6766a5e3d1;",
            "User-Agent": `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36 Edg/117.0.2045.31`,
            'Content-Type': 'application/json'
        }
    })
    const data = await response.data;
    const redirectURI = data.ids.join("");
    redirect("/qr-code/"+redirectURI);
}

export default async function QRPage() {
    return <form action={generateQR} className="max-w-xl mx-auto space-y-4">
        <div>
            <Label htmlFor="description">Description</Label>
            <Input name="description" id="description" type={"text"} required />
        </div>
        <div>
            <Label htmlFor="url">URL</Label>
            <Input name="url" id="url" type={"url"} required />
        </div>
        <Button>Generate QR</Button>
    </form>
}