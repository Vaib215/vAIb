import Image from "next/image";
import { useParams } from "next/navigation"

export default async function ({ params }: {
    params: { id: string }
}) {
    const { id } = params;
    const images = []
    for (let i = 0; i < id.length; i += 6) {
        images.push(id.slice(i, i + 6));
    }
    return <main className="grid grid-cols-4 gap-8 m-4">
        {images.map(image => {
            return <Image key={image} alt="Generated QR Code" src={`https://s3.amazonaws.com/assets.qrx.codes/generated/${image}-hd.png`} className="rounded" loading="lazy" decoding="async" width={600} height={600} />
        })}
    </main>
}