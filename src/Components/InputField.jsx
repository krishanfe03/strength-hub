// import React from "react";

// const InputField = ({ label, type, name, value, onChange, placeholder }) => {
//   return (
//     <div className="flex flex-col">
//       {label && <label className="mb-1"> {label} </label>}

//       {type === "textarea" ? (
//         <textarea
//           name={name}
//           placeholder={placeholder}
//           onChange={onChange}
//           className="w-full h-35 p-3 border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[1px] "
//         />
//       ) : (
//         <input
//           type="text"
//           name={name}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           className="border border-slate-400 p-2 w-[240px] rounded-[1px] "
//         />
//       )}

//     </div>
//   );
// };

// export default InputField;


import React from "react";

const InputField = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <div className="flex flex-col w-full sm:w-[240px]">
      {label && <label className="mb-1 text-sm sm:text-base">{label}</label>}

      {type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          className="w-full min-h-[120px] p-3 border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[1px] lg:w-[480px] lg:h-[150px] "
        />
      ) : (
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="border border-slate-400 p-2 w-full sm:w-[240px] lg:w-full rounded-[1px]"
        />
      )}
    </div>
  );
};

export default InputField;

