"use client";
import { useState } from "react";

const doctors = [
    { id: 1, name: "William Smith", status: "offline", time: "left 7 mins ago", img: "/self3.jpg" },
    { id: 2, name: "Martha Williams", status: "online", img: "/self3.jpg" },
    { id: 3, name: "Joseph Clark", status: "online", img: "/self3.jpg" },
    { id: 4, name: "Nancy Taylor", status: "online", img: "/self3.jpg" },
    { id: 5, name: "Margaret Wilson", status: "online", img: "/self3.jpg" },
    { id: 6, name: "Joseph Jones", status: "offline", time: "left 30 mins ago", img: "/self3.jpg" },
    { id: 7, name: "Jane Brown", status: "offline", time: "left 10 hours ago", img: "/self3.jpg" },
    { id: 8, name: "Eliza Johnson", status: "online", img: "/self3.jpg" },
];



export default function ChatDoctor() {
    const [search, setSearch] = useState("");
    const [messages, setMessages] = useState([
        { sender: "Maria", text: "Hi Robert, how are you? How is your work going on?", time: "10:10 AM, Today", type: "sent" },
        { sender: "Robert", text: "It's good. We completed almost all tasks assigned by our manager.", time: "10:12 AM, Today", type: "received" },
        { sender: "Robert", text: "How are you feeling today? What about vacation?", time: "10:12 AM, Today", type: "received" },
    ]);

    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { sender: "Maria", text: input, time: "10:15 AM, Today", type: "sent" }]);
            setInput("");
        }
    };

    return (
        <>
            <div className="flex gap-4">
                {/* doctor list */}
                <div className="w-80 bg-white p-4 rounded-md">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full p-2 border rounded-md mb-3 outline-none focus:ring-1 focus:ring-blue-300"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <div>
                        {doctors
                            .filter((doc) => doc.name.toLowerCase().includes(search.toLowerCase()))
                            .map((doctor, index) => (
                                <div
                                    key={doctor.id}
                                    className={`flex items-center p-2 rounded-lg mb-2 ${index === 0 ? "bg-gray-200" : "hover:bg-gray-100"
                                        }`}
                                >
                                    <img src={doctor.img} alt={doctor.name} className="w-10 h-10 rounded-full object-cover mr-3 " />
                                    <div>
                                        <p className="text-sm font-medium text-gray-800">{doctor.name}</p>
                                        <div className="flex items-center text-xs text-gray-500">
                                            <span
                                                className={`w-2 h-2 rounded-full mr-1 ${doctor.status === "online" ? "bg-green-500" : "bg-red-500"
                                                    }`}
                                            ></span>
                                            {doctor.status === "offline" ? doctor.time : "online"}
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                {/* chat box */}
                <div className="w-full bg-white rounded-md p-4 text-black">
                    {/* Header */}
                    <div className="flex items-center border-b border-gray-300 pb-3">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-10 h-10 rounded-full" />
                        <div className="ml-3">
                            <h2 className="font-semibold">Maria Smith</h2>
                            <p className="text-sm text-gray-500">2 new messages</p>
                        </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="h-[450px] overflow-y-auto p-3 space-y-3">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.type === "sent" ? "justify-end" : "justify-start"}`}>
                                <div
                                    className={`p-3 rounded-lg max-w-xs ${msg.type === "sent" ? "bg-blue-100 text-right" : "bg-gray-200 text-left"
                                        }`}
                                >
                                    <p className="text-sm">{msg.text}</p>
                                    <p className="text-xs text-gray-500 mt-1">{msg.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input Box */}
                    <div className="border-t border-gray-300 pt-2 flex">
                        <input
                            type="text"
                            placeholder="Enter text here.."
                            className="w-full p-2 border rounded-md focus:outline-none"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                        />
                        <button onClick={sendMessage} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
