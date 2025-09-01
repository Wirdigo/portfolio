import Image from "next/image";
import image from "../../public/myImage.png"
import Link from 'next/link'

export default function Home() {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
                <div className="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row">
                    <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full">
                        <Image className = "bg-cover rounded-xl" src={image} alt={"My image"}></Image>
                    </div>
                    <div
                        className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
                        <div className="flex flex-col gap-2 text-left">
                            <h1
                                className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                            >
                                Fullstack Developer
                            </h1>
                            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                                Perseverance and resilience are my two best friends.
                            </h2>
                        </div>
                        <Link href={"/Projects"}>
                        <button
                            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#39e079] text-[#122118] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                        >
                            <span className="truncate">View Portfolio</span>
                        </button></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
