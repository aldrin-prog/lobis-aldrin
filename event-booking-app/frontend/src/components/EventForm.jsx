import { useEffect, useRef, useState } from "react";
import EditorComponent from "./EditorComponent";
import InputDateRangePicker from "./DateRangePicker";
const EventForm = (props) => {
    const {handleSubmit,event,setEvent,text,action} = props;
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setEvent(prev=>(
            {...prev,[name]:value}
        ))
    }
    const handleChangeEditor=(value)=>{
        console.log(value)
    }
    const handleChangeTime=(e)=>{
        const {name,value}=e.target;
        setEvent(prev=>(
            {...prev,timeFrame:{
                ...prev.timeFrame,
                [name]:value
            }}
        ))
    }
    const handleChangeImage=(e)=>{
        const {name}=e.target;
        const file=e.target.files[0];
        console.log(name);
        setEvent(prev=>({...prev,[name]:file}));
    }
    // useEffect(() => {
    //     if (!event) {
    //         setEvent({
    //             "title": "",
    //             "tags": "",
    //             "description": "",
    //             "date": "",
    //             "timeFrame": {
    //                 "from": "",
    //                 "to": ""
    //             },
    //             "venue": "",
    //             "fee": 0,
    //             "slotsAvailable": 0
    //         }
    //         )
    //     }
    // }, [])
    if(!event)
        return (<div>Loding</div>)
    return (
        <div className="p-4 w-full">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg space-y-4">
                <h1 className="text-2xl font-bold text-center">{text}</h1>
                <div>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="title"
                        placeholder="Event Title"
                        className="input input-bordered w-full"
                        value={event.title}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Image</label>
                    <input
                        onChange={handleChangeImage}
                        type="file"
                        name="image"
                        placeholder="Event Title"
                        className="file-input w-full focus:outline-none  input-bordered "
                        // defaultValue={event.image}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Tags</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="tags"
                        placeholder="Tags"
                        className="input input-bordered w-full"
                        defaultValue={event.tags}
                    />
                    <div>
                        
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea className="textarea" onChange={handleChange} name="description">{event.description}</textarea>
                    {/* { event.description!=''?<EditorComponent value={event.description}/>:<EditorComponent value=""/>} */}
                    
                </div>

                <div className="grid grid-cols-1 gap-y-5">
                    <div>
                        <label className="block text-sm font-medium mb-1">Date</label>
                        <input
                            onChange={handleChange}
                            type="date"
                            name="date"
                            className="input input-bordered w-full"
                            defaultValue={event.date}
                        />
                        {/* <InputDateRangePicker/> */}
                    </div>

                    <div className="grid grid-cols-1 gap-4 h-max">
                        <div>
                            <label className="block text-sm font-medium mb-1">From</label>
                            <input
                                onChange={handleChangeTime}
                                type="time"
                                name="from"
                                className="input input-bordered w-full"
                                defaultValue={event.timeFrame.from}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">To</label>
                            <input
                                onChange={handleChangeTime}
                                type="time"
                                name="to"
                                className="input input-bordered w-full"
                                defaultValue={event.timeFrame.to}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Venue</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="venue"
                        placeholder="Event Venue"
                        className="input input-bordered w-full"
                        value={event.venue}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Fee (PHP)</label>
                    <input
                        onChange={handleChange}
                        type="number"
                        name="fee"
                        placeholder="Event Fee"
                        className="input input-bordered w-full"
                        value={event.fee}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Slots Available</label>
                    <input
                        onChange={handleChange}
                        type="number"
                        name="slotsAvailable"
                        placeholder="Number of Slots"
                        className="input input-bordered w-full"
                        value={event.slotsAvailable}
                    />
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary w-full">Submit</button>
                </div>
            </form>
        </div>

    )
}
export default EventForm;