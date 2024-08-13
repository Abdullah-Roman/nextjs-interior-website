export const tagVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, type: "spring", delay: 0.2 },
  },
};

export const paraVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      delay: 0.3,
    },
  },
};
