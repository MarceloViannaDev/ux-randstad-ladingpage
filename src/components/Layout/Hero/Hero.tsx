import TrainPipeline from '../../../assets/images/pipeline-train.png';
import {
  Balancer,
  ButtonPrimary,
  MotionContainer,
  Wrapper,
  WrapperMotionView,
  clsx,
  motion,
} from '../../../components';

const heroData = {
  vScreen: 'calc(100vh - var(--v-screen))',
  source: TrainPipeline,
  imageSize:
    'max-w-[278px] max-h-[165px] md:max-w-[328px] md:max-h-[205px] xl:min-w-[368px] xl:min-h-[255px]',
  alt: 'Randstad Import Pipeline Image',
  aria: 'Randstad Import Pipeline Train Image Illustration',
  title: 'Randstad Import Pipeline.',
  description:
    'Welcome to Randstad Import Pipeline, this service will allow you to import your Timesheet & Attendance records into Randstad payroll system.',
};

export const Hero = () => {
  return (
    <section>
      <Wrapper>
        <WrapperMotionView>
          <motion.div
            initial="hidden"
            animate="visible"
            style={{ minHeight: heroData.vScreen }}
            variants={MotionContainer.container}
            className="flex flex-col items-center justify-center gap-8 py-16 lowercase md:py-24 md:gap-16 xl:flex-row">
            <motion.img
              variants={MotionContainer.item}
              className={clsx('self-center xl:order-2', heroData.imageSize)}
              src={heroData.source}
              alt={heroData.alt}
              aria-label={heroData.aria}
            />
            <div className="flex flex-col gap-8 xl:order-1">
              <motion.div
                variants={MotionContainer.container}
                className="flex flex-col gap-2 basis-1/2">
                <motion.h1
                  variants={MotionContainer.item}
                  className="text-2xl md:text-4xl xl:text-6xl">
                  {heroData.title}
                </motion.h1>
                <motion.p variants={MotionContainer.item} className="text-sm md:text-base">
                  <Balancer>{heroData.description}</Balancer>
                </motion.p>
                <motion.div variants={MotionContainer.item} className="mt-4">
                  <a href="#warning">
                    <ButtonPrimary variant="read" label="read" color="outlined" />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </WrapperMotionView>
      </Wrapper>
    </section>
  );
};
