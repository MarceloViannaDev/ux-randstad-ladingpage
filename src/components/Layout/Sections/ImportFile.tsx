import { useRef, useState } from 'react';
import PendrivePipeline from '../../../assets/images/pipeline-upload-pendrive.png';
import {
  Balancer,
  ButtonPrimary,
  MotionContainer,
  Wrapper,
  WrapperMotionView,
  clsx,
  motion,
} from '../../../components';

const sectionData = {
  source: PendrivePipeline,
  imageSize:
    'max-w-[238px] max-h-[115px] md:max-w-[268px] md:max-h-[145px] xl:max-w-[298px xl:max-h-[215px]',
  alt: 'To import a Timesheet and Attendance file',
  aria: 'To import a Timesheet and Attendance file Image Illustration',
  title: 'To import a Timesheet and Attendance file.',
  description: (
    <>
      Please select the timesheet file to Import from the{' '}
      <strong>button below and follow the instructions.</strong>
    </>
  ),
};

export const ImportFile = () => {
  const fileInput = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleUploadClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setFileName(file.name);
      console.log(file);
    }
  };

  return (
    <Wrapper>
      <WrapperMotionView>
        <motion.section
          id="fileimport"
          initial="hidden"
          animate="visible"
          variants={MotionContainer.container}
          className="flex flex-col gap-8 py-16 lowercasemd:py-24 md:gap-16 xl:flex-row ">
          <motion.img
            variants={MotionContainer.item}
            className={clsx('self-center xl:order-2', sectionData.imageSize)}
            src={sectionData.source}
            alt={sectionData.alt}
            aria-label={sectionData.aria}
          />
          <div className="flex flex-col gap-8 xl:order-1">
            <motion.div
              variants={MotionContainer.container}
              className="flex flex-col gap-2 basis-1/2">
              <motion.h1
                variants={MotionContainer.item}
                className="text-2xl md:text-4xl xl:text-6xl">
                {sectionData.title}
              </motion.h1>
              <motion.p variants={MotionContainer.item} className="text-sm md:text-base">
                <Balancer>{sectionData.description}</Balancer>
              </motion.p>
            </motion.div>
            <motion.div variants={MotionContainer.item} className="flex flex-col gap-4 md:flex-row">
              <ButtonPrimary
                color="filled"
                label="upload"
                variant="upload"
                onClick={handleUploadClick}
              />
              <input
                type="file"
                ref={fileInput}
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
              {fileName && (
                <div className="flex flex-col text-sm text-gray-400">
                  <span>Selected file:</span>
                  <p className="text-xs italic text-ui-positive">
                    <Balancer>{fileName}</Balancer>
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </motion.section>
      </WrapperMotionView>
    </Wrapper>
  );
};
