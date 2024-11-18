// import { DropdownSelect } from '@/components/dropdown-select';

// interface Blank {
//   id: number;
//   options: string[];
// }

// interface FillInTheBlankResponseProps {
//   instruction: string;
//   responseText: string;
//   blanks: Blank[];
// }

// export const FillInTheBlankResponse: React.FC<FillInTheBlankResponseProps> = ({
//   instruction,
//   responseText,
//   blanks,
// }) => {


//   const renderResponseWithBlanks = () => {
//     const parts = responseText.split(/(\{\d+\})/g);
//     return parts.map((part, index) => {
//       const match = part.match(/\{(\d+)\}/);
//       if (match) {
//         const blankId = parseInt(match[1], 10);
//         const blankOptions = blanks.find(b => b.id === blankId)?.options || [];
//         return (
          
//           <div className="inline-block">

//           <DropdownSelect 
//           options={blankOptions}
//           key={blankId}
//           />
//           </div>
//         );
//       }
//       return <span key={index}>{part}</span>;
//     });
//   };

//   return (
//     <div className="">
//       <h2 className="font-medium mb-4 text-customLightBlue">
//         <span className="inline-block bg-customLightBlue text-white rounded-full w-6 h-6 text-center mr-2">i</span>
//         {instruction}
//       </h2>
//       <div className="border p-4 rounded">
//         <div className="text-sm leading-relaxed whitespace-pre-wrap">
//           {renderResponseWithBlanks()}
//         </div>
//       </div>
//     </div>
//   );
// };