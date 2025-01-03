export const Message = ({ label, placeholder }) => {
    return (
        <div className="text-sm w-full ">
            <label className="text-border font-semibold">{label}</label>
            <textarea
                className="w-full h-40 mt-2 p-6 bg-main border border-border rounded "
                placeholder={placeholder}
            ></textarea>
        </div>
    );
};

export const Select = ({ label, options, onChange }) => {
    return (
        <>
            <label className="text-border font-semibold ">{label}</label>
            <select
                className="w-full mt-2 px-6 py-4 text-text border border border-border rounded"
                onChaneg={onChange}
            >
                {options.map((o, i) => (
                    <options key={i} value={o.value}>
                        {o.title}
                    </options>
                ))}
            </select>
        </>
    );
};

export const Input = ({ label, placeholder, type, bg }) => {
    return (
        <div className="mb-4">
            {/* Label */}
            <label className="text-border font-semibold block">{label}</label>
            
            {/* Input field */}
            <input 
                required
                type={type}
                placeholder={placeholder}
                className={`w-full mt-2 py-3 px-4 text-sm border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${bg ? "bg-main" : "bg-dry"}`} 
            />
        </div>
    );
};
