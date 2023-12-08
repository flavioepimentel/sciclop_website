const styles = {
    
  boxWidth: "w-full",
  boxWidthImage:'w-[86%] h-[86%]',

  heading2: "font-poppins font-semibold xs:text-[3rem] text-[2.5rem] text-black xs:leading-[4.8rem] leading-[4.175rem] w-full",
  paragraph: "font-poppins font-normal text-black text-[1.125rem] leading-[1.925rem]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-between items-start",

  paddingX: "sm:px-0 px-0",
  paddingY: "sm:py-16 py-0",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  especialSectionReverse: `flex md:flex-row flex-col-reverse sm:py-16 pt-8 pb-0`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  hiddenImageOnSmall: `md:block hidden`,
  hiddenImageOnBig: `md:hidden block`,
  paddingText: `ml-10`,
  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
