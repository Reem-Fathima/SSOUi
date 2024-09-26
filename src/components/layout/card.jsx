// import { Button, Card, Typography } from 'antd';
// import React from 'react';

// const { Title, Text } = Typography;

// // Common text styles
// const commonTextStyle = {
//   fontSize: '13px',
//   fontFamily: 'Inter',
//   fontWeight: 'medium',
//   lineHeight: '15.73px',
//   textAlign: 'left',
// };

// const boldTextStyle = {
//   ...commonTextStyle,
//   fontWeight: 'bold',
//   color: '#2E2E30',
// };

// const DashCard = ({ icon, title, fields }) => {
//   return (
//     <Card className=" w-[240px] h-[267px] mt-[38px] rounded-[20px]  border border-[#d9d9d9]">
//       <div className="flex items-center  whitespace-normal">
        
//         <div className="flex items-center justify-center w-[40px] h-[40px] rounded-[8px] border-2 border-[#01002A] bg-white mr-[10px]">
//           <img src={icon} alt="Custom Icon" className="w-[24px] h-[24px]" />  
//         </div>

        

//         <Title
//           level={4}
//           className="m-0 text-[#2E2E30] font-[Inter] text-[10px] font-bold  text-left  whitespace-normal break-words"
//         >
//           {title}
//         </Title>
//         <div className="flex items-right  w-[40px] h-[5px] rounded-[8px] bg-white mr-[40px]">
//           <img src={icon} alt="Custom Icon" className="w-[24px] h-[24px]" />  
//         </div>
//       </div>
//       {fields.map(({ label, value }, index) => (
//         <div className="mb-[16px]" key={index}>
//           <Text style={commonTextStyle}>{label}:</Text>
//           <Text style={boldTextStyle} className="mt-[5px] float-right">
//             {value}
//           </Text>
//         </div>
//       ))}
//       <Button className="w-[150px] ml-[20px] bg-[#014D4E4D] text-[#014D4E] hover:bg-[#014D4E] hover:text-white">
//         Details
//       </Button>
//     </Card>
//   );
// };

// export default DashCard;




import { Button, Card, Typography } from 'antd';
import React from 'react';

const { Title, Text } = Typography;

const commonTextStyle = {
  fontSize: '13px',
  fontFamily: 'Inter',
  fontWeight: 'medium',
  lineHeight: '15.73px',
  textAlign: 'left',
};

const boldTextStyle = {
  ...commonTextStyle,
  fontWeight: 'bold',
  color: '#2E2E30',
};

const DashCard = ({ icon, title, fields }) => {
  return (
    <Card className="w-[240px] mt-[38px] rounded-[20px] border border-[#d9d9d9] flex flex-col justify-between">
      <div className="flex items-center mb-4">
        <div className="flex items-center justify-center w-[40px] h-[40px] rounded-[8px] border-2 border-[#01002A] bg-white mr-[10px]">
          <img src={icon} alt="Custom Icon" className="w-[24px] h-[24px]" />
        </div>

        <Title
          level={4}
          className="m-0 text-[#2E2E30] font-[Inter] text-[14px] font-bold text-left break-words max-w-[160px] line-clamp-2"
        >
          {title}
        </Title>
        
      </div>

      <div className="flex-grow">
        {fields.map(({ label, value }, index) => (
          <div className="mb-[16px] flex justify-between" key={index}>
            <Text style={commonTextStyle}>{label}:</Text>
            <Text style={boldTextStyle} className="float-right">
              {value}
            </Text>
          </div>
        ))}
      </div>

      <Button className="w-[150px] mx-auto bg-[#014D4E4D] text-[#014D4E] hover:bg-[#014D4E] hover:text-white">
        Details
      </Button>
    </Card>
  );
};

export default DashCard;
