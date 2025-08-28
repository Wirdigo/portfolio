export default function Contacts()
{
    return (
        <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div className="flex flex-wrap justify-between gap-3 p-4">
                    <div className="flex min-w-72 flex-col gap-3">
                        <p className="text-white tracking-light text-[32px] font-bold leading-tight">Get in Touch</p>
                        <p className="text-[#9eb7a8] text-sm font-normal leading-normal">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of
                            your visions. Feel free to reach out!
                        </p>
                    </div>
                </div>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-white text-base font-medium leading-normal pb-2">Name</p>
                        <input
                            placeholder="Your Name"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#29382f] focus:border-none h-14 placeholder:text-[#9eb7a8] p-4 text-base font-normal leading-normal"
                            value=""
                        />
                    </label>
                </div>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-white text-base font-medium leading-normal pb-2">Email</p>
                        <input
                            placeholder="Your Email"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#29382f] focus:border-none h-14 placeholder:text-[#9eb7a8] p-4 text-base font-normal leading-normal"
                            value=""
                        />
                    </label>
                </div>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-white text-base font-medium leading-normal pb-2">Subject</p>
                        <input
                            placeholder="Subject"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#29382f] focus:border-none h-14 placeholder:text-[#9eb7a8] p-4 text-base font-normal leading-normal"
                            value=""
                        />
                    </label>
                </div>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-white text-base font-medium leading-normal pb-2">Message</p>
                        <textarea
                            placeholder="Your Message"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#29382f] focus:border-none min-h-36 placeholder:text-[#9eb7a8] p-4 text-base font-normal leading-normal"
                        ></textarea>
                    </label>
                </div>
                <div className="flex px-4 py-3 justify-end">
                    <button
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#38e07b] text-[#111714] text-sm font-bold leading-normal tracking-[0.015em]"
                    >
                        <span className="truncate">Send Message</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
