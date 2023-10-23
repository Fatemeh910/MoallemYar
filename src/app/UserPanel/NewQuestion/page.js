import PreviewExam from "@/components/PreviewExam";
import QuestionSubject from "@/components/Questionsubject/QuestionSubject";
import SortableTestAnswer from "@/components/SortableTestAnswer/SortableTestAnswerArea";
const NewQuestion = () => {
  return (
    <div className="flex">
      <QuestionSubject/>
      <SortableTestAnswer />
      <PreviewExam />
    </div>
  );
};

export default NewQuestion;
