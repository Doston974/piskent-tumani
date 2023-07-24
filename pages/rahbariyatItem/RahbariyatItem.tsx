"use client"

import { FcCellPhone, FcCalendar, FcFeedback } from "react-icons/fc";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button } from "@mantine/core";
import avatar from "@/assets/img/avatar.png"
import Image from "next/image";

const RahbariyatItem = ({ item }: any) => {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <div>
            <div className="lg:flex md:flex gap-8">
                <div className="lg:w-[350px] lg:h-[350px] md:w-[330px] md:h-[330px] w-[300px] h-[300px] mb-8">
                    <Image
                        src={item.post_img ? item.post_img : avatar}
                        width={330}
                        height={330}
                        sizes="100vw"
                        alt="hokim img"
                        className="object-cover rounded shadow-2xl"
                    />
                </div>
                <div className="lg:w-[600px]">
                    <p className="text-lg font-semibold mb-[10px]">{item.profession}</p>
                    <p className="text-2xl font-semibold mb-[10px]">{item.f_name}</p>
                    <p className="flex items-center gap-1 mb-[10px]">
                        <FcCellPhone fontSize={24} />
                        {item.phone}
                    </p>
                    <p className="flex items-center gap-1 mb-[10px]">
                        <FcFeedback fontSize={24} />
                        {item.email}
                    </p>
                    <p className="flex items-center gap-1">
                        <FcCalendar fontSize={24} />
                        {item.admission_days}
                    </p>
                    <div>
                        <div className="flex gap-4 mt-[90px]">
                            <div>
                                <Modal
                                    opened={opened}
                                    onClose={close}
                                    withCloseButton={false}
                                    size="70%"
                                    centered
                                >
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: item.html_obligations,
                                        }}
                                    ></div>
                                </Modal>

                                <Group position="center">
                                    <Button
                                        onClick={open}
                                        className="border-2 bg-[#229ed9] text-white pr-4 px-3 rounded py-1 hover:bg-[#00afb9] transition-all duration-200"
                                    >
                                        Majbutiyatlar
                                    </Button>
                                </Group>
                            </div>
                            <div>
                                <Modal
                                    opened={opened}
                                    onClose={close}
                                    withCloseButton={false}
                                    size="70%"
                                    centered
                                >
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: item.html_cv,
                                        }}
                                    ></span>
                                </Modal>
                                <Group position="center">
                                    <Button
                                        className="border-2 bg-[#229ed9] text-white pr-4 px-3 rounded py-1 hover:bg-[#00afb9] transition-all duration-200 "
                                        onClick={open}
                                    >
                                        Tarjimai hol
                                    </Button>
                                </Group>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b-2 border-[#0f3460] py-[20px] mb-[50px]"></div>
        </div>
    );
};
export default RahbariyatItem;
