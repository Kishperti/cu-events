import React from 'react'
import "./attractions.css"
import valen1 from "../../assets/valen1.png"
import valen8 from "../../assets/valen8.png"
import valen3 from "../../assets/valen3.png"
import valen9 from "../../assets/valen9.png"
import valen10 from "../../assets/valen10.png"
import valen11 from "../../assets/valen11.png"
import valen6 from "../../assets/valen6.png"
import valen12 from "../../assets/valen12.png"

export default function Attractions() {
    return (
        <div id={'attractions'} className="bg-[#55141F] relative h-full w-full flex flex-col items-center justify-start pt-[120px] pb-[200px]">
            <div className="over"></div>
            <div className="about-clouds z-40"></div>
            <div className="chip gif text-center text-5xl lg:text-8xl text-alt-white">
                Event Depot
            </div>
            <div className="flex flex-col justify-center w-full h-full mt-24 items-center lg:-rotate-2">
            <div className="w-full h-3 translate-x-[10px] bg-[#1e1012] hidden lg:block overflow-x-hidden relative before:absolute before:top-0 before:left-0 before:w-[2000px] before:h-3 before:bg-[#1e1012]"></div>
                <div className="w-full h-3 translate-x-[-10px] -mt-3 bg-[#1e1012] hidden lg:block overflow-x-hidden relative before:absolute before:top-0 before:left-0 before:w-[2000px] before:h-3 before:bg-[#1e1012]"></div>
                <div className="grid strip1 grid-cols-1 place-items-center gap-16 lg:grid-cols-4 w-full relative px-4 lg:px-20">
                    <div className="card transition-all flex flex-col justify-center items-center relative bg-[#ffe8e8] shadow-lg rounded-md mt-2 h-48 w-60 lg:w-60 px-4 pb-6">
                        <div className="absolute top-0 translate-y-[-85%] left-[30%] h-10 w-6 bg-[#4e393c] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] left-[30%] h-10 w-6 bg-[#1e1012]"></div>
                        <div className="absolute top-0 translate-y-[-85%] right-[30%] h-10 w-6 bg-[#4e393c] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] right-[30%] h-10 w-6 bg-[#1e1012]"></div>
                        <div className="h-32 w-32">
                            <img className='h-full w-full' src={valen8} alt="" />
                        </div>
                        <div className="chip text-2xl text-[#4e393c] font-bold mt-1">
                            Goodie Galore
                        </div>
                    </div>
                    <div className="card transition-all flex flex-col justify-center items-center relative bg-[#ffe8e8] shadow-lg rounded-md mt-2 h-48 w-60 lg:w-60 px-4 pb-6">
                        <div className="absolute top-0 translate-y-[-85%] left-[30%] h-10 w-6 bg-[#4e393c] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] left-[30%] h-10 w-6 bg-[#1e1012]"></div>
                        <div className="absolute top-0 translate-y-[-85%] right-[30%] h-10 w-6 bg-[#4e393c] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] right-[30%] h-10 w-6 bg-[#1e1012]"></div>
                        <div className="h-32 w-32">
                            <img className='h-full w-full' src={valen3} alt="" />
                        </div>
                        <div className="chip text-2xl text-[#4e393c] font-bold mt-1">
                            Hackathon Buzz
                        </div>
                    </div>
                    <div className="card transition-all flex flex-col justify-center items-center relative bg-[#ffe8e8] shadow-lg rounded-md mt-2 h-48 w-60 lg:w-60 px-4 pb-6">
                        <div className="absolute top-0 translate-y-[-85%] left-[30%] h-10 w-6 bg-[#4e393c] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] left-[30%] h-10 w-6 bg-[#1e1012]"></div>
                        <div className="absolute top-0 translate-y-[-85%] right-[30%] h-10 w-6 bg-[#4e393c] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] right-[30%] h-10 w-6 bg-[#1e1012]"></div>
                        <div className="h-32 w-32">
                            <img className='h-full w-full' src={valen9} alt="" />
                        </div>
                        <div className="chip text-2xl text-[#4e393c] font-bold mt-1">
                            Cultural Delight
                        </div>
                    </div>
                    <div className="card transition-all flex flex-col justify-center items-center relative bg-[#ffe8e8] shadow-lg rounded-md mt-2 h-48 w-60 lg:w-60 px-4 pb-6">
                        <div className="absolute top-0 translate-y-[-85%] left-[30%] h-10 w-6 bg-[#4e393c] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] left-[30%] h-10 w-6 bg-[#1e1012]"></div>
                        <div className="absolute top-0 translate-y-[-85%] right-[30%] h-10 w-6 bg-[#4e393c] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] right-[30%] h-10 w-6 bg-[#1e1012]"></div>
                        <div className="h-32 w-32">
                            <img className='h-full w-full' src={valen1} alt="" />
                        </div>
                        <div className="chip text-2xl text-[#4e393c] font-bold mt-1">
                            Code Carnival
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center w-full h-full mt-24 lg:mt-32 items-center lg:rotate-2">
                <div className="w-full h-3 translate-x-[10px] bg-[#1e1012] hidden lg:block overflow-x-hidden relative before:absolute before:top-0 before:left-0 before:w-[2000px] before:h-3 before:bg-[#1e1012]"></div>
                <div className="w-full h-3 translate-x-[-10px] -mt-3 bg-[#1e1012] hidden lg:block overflow-x-hidden relative before:absolute before:top-0 before:left-0 before:w-[2000px] before:h-3 before:bg-[#1e1012]"></div>
                <div className="grid strip2 grid-cols-1 place-items-center gap-16 lg:grid-cols-4 w-full relative px-4 lg:px-20">
                    <div className="card transition-all flex flex-col justify-center items-center relative bg-[#ffe8e8] shadow-lg rounded-md mt-2 h-48 w-60 lg:w-60 px-4 pb-6">
                        <div className="absolute top-0 translate-y-[-85%] left-[30%] h-10 w-6 bg-[#4e393c] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] left-[30%] h-10 w-6 bg-[#1e1012]"></div>
                        <div className="absolute top-0 translate-y-[-85%] right-[30%] h-10 w-6 bg-[#4e393c] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] right-[30%] h-10 w-6 bg-[#1e1012]"></div>
                        <div className="h-32 w-32">
                            <img className='h-full w-full' src={valen10} alt="" />
                        </div>
                        <div className="chip text-2xl text-[#4e393c] font-bold mt-1">
                            Fun Fiesta
                        </div>
                    </div>
                    <div className="card transition-all flex flex-col justify-center items-center relative bg-[#ffe8e8] shadow-lg rounded-md mt-2 h-48 w-60 lg:w-60 px-4 pb-6">
                        <div className="absolute top-0 translate-y-[-85%] left-[30%] h-10 w-6 bg-[#4e393c] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] left-[30%] h-10 w-6 bg-[#1e1012]"></div>
                        <div className="absolute top-0 translate-y-[-85%] right-[30%] h-10 w-6 bg-[#4e393c] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] right-[30%] h-10 w-6 bg-[#1e1012]"></div>
                        <div className="h-32 w-32">
                            <img className='h-full w-full' src={valen11} alt="" />
                        </div>
                        <div className="chip text-2xl text-[#4e393c] font-bold mt-1">
                            Expert Labs
                        </div>
                    </div>
                    <div className="card transition-all flex flex-col justify-center items-center relative bg-[#ffe8e8] shadow-lg rounded-md mt-2 h-48 w-60 lg:w-60 px-4 pb-6">
                        <div className="absolute top-0 translate-y-[-85%] left-[30%] h-10 w-6 bg-[#4e393c] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] left-[30%] h-10 w-6 bg-[#1e1012]"></div>
                        <div className="absolute top-0 translate-y-[-85%] right-[30%] h-10 w-6 bg-[#4e393c] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] right-[30%] h-10 w-6 bg-[#1e1012]"></div>
                        <div className="h-32 w-32">
                            <img className='h-full w-full' src={valen6} alt="" />
                        </div>
                        <div className="chip text-2xl text-[#4e393c] font-bold mt-1">
                            Tech Innovations
                        </div>
                    </div>
                    <div className="card transition-all flex flex-col justify-center items-center relative bg-[#ffe8e8] shadow-lg rounded-md mt-2 h-48 w-60 lg:w-60 px-4 pb-6">
                        <div className="absolute top-0 translate-y-[-85%] left-[30%] h-10 w-6 bg-[#4e393c] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] left-[30%] h-10 w-6 bg-[#1e1012]"></div>
                        <div className="absolute top-0 translate-y-[-85%] right-[30%] h-10 w-6 bg-[#4e393c] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] right-[30%] h-10 w-6 bg-[#1e1012]"></div>
                        <div className="h-32 w-32">
                            <img className='h-full w-full' src={valen12} alt="" />
                        </div>
                        <div className="chip text-2xl text-[#4e393c] font-bold mt-1">
                            Connect Hub
                        </div>
                    </div>
                </div>
            </div>
            <div className="chip gif text-cente rmt-24 lg:mt-32 text-5xl lg:text-8xl text-alt-white">
                Our Speakers
            </div>
            <div className="flex flex-col justify-center w-full h-full mt-24 lg:mt-32 items-center">
                <div className="w-full h-3 translate-x-[10px] bg-[#1e1012] hidden lg:block overflow-x-hidden relative before:absolute before:top-0 before:left-0 before:w-[2000px] before:h-3 before:bg-[#1e1012]"></div>
                <div className="w-full h-3 translate-x-[-10px] -mt-3 bg-[#1e1012] hidden lg:block overflow-x-hidden relative before:absolute before:top-0 before:left-0 before:w-[2000px] before:h-3 before:bg-[#1e1012]"></div>
                <div className="grid strip1 grid-cols-1 place-items-center gap-16 lg:grid-cols-4 w-full relative px-4 lg:px-20">
                    <a href='https://www.linkedin.com/in/rajnish-narayan-singh-921948a2/' className="card transition-all flex flex-col justify-center items-center relative bg-[#ffe8e8] shadow-lg rounded-md mt-2 min-h-48 w-60 lg:w-60 px-0 pb-0">
                        <div className="absolute top-0 translate-y-[-85%] left-[30%] h-10 w-6 bg-[#4e393c] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] left-[30%] h-10 w-6 bg-[#1e1012]"></div>
                        <div className="absolute top-0 translate-y-[-85%] right-[30%] h-10 w-6 bg-[#4e393c] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] right-[30%] h-10 w-6 bg-[#1e1012]"></div>
                        <div className="absolute top-0 left-0 bg-[#1e1012] p-2 text-lg text-[#ffe8e8] rounded-tl-md">21</div>
                        <div className="h-32 w-32">
                            <img className='h-full w-full' src="https://media.licdn.com/dms/image/D5603AQGq3dZ1-Fsliw/profile-displayphoto-shrink_400_400/0/1705398260728?e=1713398400&v=beta&t=wIwtZAV1GrndcliF55ELO2z6yn60HwU6E9JRaf5Y6qk" alt="" />
                        </div>
                        <div className="chip text-xl text-[#4e393c] font-bold mt-4 px-4">
                        RAJNISH NARAYAN SINGH
                        </div>
                        <div className="text-[#444] text-center px-4">Blockchain Consultant at MoogleLabs</div>
                        <div className="w-full text-lg p-4 text-center mt-4 bg-[#1e1012] rounded-b-md text-[#ffe8e8]">Blockchain Unboxed</div>
                    </a>
                    <a href='https://www.linkedin.com/in/ankushkun/' className="card transition-all flex flex-col justify-center items-center relative bg-[#ffe8e8] shadow-lg rounded-md mt-2 min-h-48 w-60 lg:w-60 px-0 pb-0">
                        <div className="absolute top-0 translate-y-[-85%] left-[30%] h-10 w-6 bg-[#4e393c] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] left-[30%] h-10 w-6 bg-[#1e1012]"></div>
                        <div className="absolute top-0 translate-y-[-85%] right-[30%] h-10 w-6 bg-[#4e393c] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] right-[30%] h-10 w-6 bg-[#1e1012]"></div>
                        <div className="absolute top-0 left-0 bg-[#1e1012] p-2 text-lg text-[#ffe8e8] rounded-tl-md">22</div>
                        <div className="h-32 w-32">
                            <img className='h-full w-full' src="https://media.licdn.com/dms/image/D5603AQHkOfnowBqxSw/profile-displayphoto-shrink_400_400/0/1707770168284?e=1713398400&v=beta&t=NG-4ZJDCnAY2pXjHaVoUjL8GIjnIoBd4bqKUWojGdkU" alt="" />
                        </div>
                        <div className="chip text-xl text-[#4e393c] font-bold mt-4 px-4">
                        ANKUSH SINGH
                        </div>
                        <div className="text-[#444] text-center px-4">Arweave hackerhouse winne</div>
                        <div className="w-full text-lg p-4 text-center mt-4 bg-[#1e1012] rounded-b-md text-[#ffe8e8]">Blockchain Basics Lab</div>
                    </a>
                    <a href='https://www.linkedin.com/in/veer-pratap-singh/' className="card transition-all flex flex-col justify-center items-center relative bg-[#ffe8e8] shadow-lg rounded-md mt-2 min-h-48 w-60 lg:w-60 px-0 pb-0">
                        <div className="absolute top-0 translate-y-[-85%] left-[30%] h-10 w-6 bg-[#4e393c] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] left-[30%] h-10 w-6 bg-[#1e1012]"></div>
                        <div className="absolute top-0 translate-y-[-85%] right-[30%] h-10 w-6 bg-[#4e393c] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] right-[30%] h-10 w-6 bg-[#1e1012]"></div>
                        <div className="absolute top-0 left-0 bg-[#1e1012] p-2 text-lg text-[#ffe8e8] rounded-tl-md">23</div>
                        <div className="h-32 w-32">
                            <img className='h-full w-full' src="https://media.licdn.com/dms/image/D4D03AQEhNGHOs80FFw/profile-displayphoto-shrink_400_400/0/1700048016590?e=1713398400&v=beta&t=VcwRSAunZII_xwvpY1XwPUaklwMawUfuRKPWtJ80dM8" alt="" />
                        </div>
                        <div className="chip text-xl text-[#4e393c] font-bold mt-4 px-4">
                        VEER PRATAP SINGH
                        </div>
                        <div className="text-[#444] text-center px-4">Blockchain Engineer at Antier Solutions</div>
                        <div className="w-full text-lg p-4 text-center mt-4 bg-[#1e1012] rounded-b-md text-[#ffe8e8]">SmartContract 101</div>
                    </a>
                    <a href='https://www.linkedin.com/in/ankushkun/' className="card transition-all flex flex-col justify-center items-center relative bg-[#ffe8e8] shadow-lg rounded-md mt-2 min-h-48 w-60 lg:w-60 px-0 pb-0">
                        <div className="absolute top-0 translate-y-[-85%] left-[30%] h-10 w-6 bg-[#4e393c] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] left-[30%] h-10 w-6 bg-[#1e1012]"></div>
                        <div className="absolute top-0 translate-y-[-85%] right-[30%] h-10 w-6 bg-[#4e393c] origin-bottom rotate-[5deg]"></div>
                        <div className="absolute top-0 translate-y-[-80%] right-[30%] h-10 w-6 bg-[#1e1012]"></div>
                        <div className="absolute top-0 left-0 bg-[#1e1012] p-2 text-lg text-[#ffe8e8] rounded-tl-md">24</div>
                        <div className="h-32 w-32">
                            <img className='h-full w-full' src="https://media.licdn.com/dms/image/D5603AQHkOfnowBqxSw/profile-displayphoto-shrink_400_400/0/1707770168284?e=1713398400&v=beta&t=NG-4ZJDCnAY2pXjHaVoUjL8GIjnIoBd4bqKUWojGdkU" alt="" />
                        </div>
                        <div className="chip text-xl text-[#4e393c] font-bold mt-4 px-4">
                        ANKUSH SINGH
                        </div>
                        <div className="text-[#444] text-center px-4">Arweave hackerhouse winne</div>
                        <div className="w-full text-lg p-4 text-center mt-4 bg-[#1e1012] rounded-b-md text-[#ffe8e8]">Arweave Dive</div>
                    </a>
                </div>
            </div>
        </div>
    )
}
