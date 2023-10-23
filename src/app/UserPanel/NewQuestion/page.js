import PreviewExam from "@/components/PreviewExam";
import SortableTestAnswer from "@/components/SortableTestAnswer/SortableTestAnswerArea";
const NewQuestion = () => {
  return (
    <div className="flex">
      <SortableTestAnswer />
      <PreviewExam />
    </div>
  );
};

export default NewQuestion;
