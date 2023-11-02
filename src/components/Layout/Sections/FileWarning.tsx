import Warning from '../../../assets/images/pipeline-file-warning.png';
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
  source: Warning,
  imageSize:
    'max-w-[238px] max-h-[115px] md:max-w-[268px] md:max-h-[145px] xl:max-w-[298px xl:max-h-[215px]',
  alt: 'Before importing a Timesheet and Attendance file',
  aria: 'Before importing a Timesheet and Attendance file Image Illustration',
  title: 'Before importing a Timesheet and Attendance file.',
  description: (
    <>
      You will need to have configured the <strong>Client and Rates.</strong> In order to do so,
      please use in the <strong>Configuration</strong> button below and follow the instructions.
    </>
  ),
};

export const FileWarning = () => {
  return (
    <Wrapper>
      <WrapperMotionView>
        <motion.section
          id="warning"
          initial="hidden"
          animate="visible"
          variants={MotionContainer.container}
          className="flex flex-col gap-8 py-24 lowercase xl:border-b md:gap-16 xl:flex-row xl:border-b-gray-200 xl:py-33">
          <motion.img
            variants={MotionContainer.item}
            className={clsx('self-center xl:order-1', sectionData.imageSize)}
            src={sectionData.source}
            alt={sectionData.alt}
            aria-label={sectionData.aria}
          />
          <div className="flex flex-col gap-8 xl:order-2">
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
              <ButtonPrimary color="filled" label="settings" variant="settings" />
            </motion.div>
          </div>
        </motion.section>
      </WrapperMotionView>
    </Wrapper>
  );
};
