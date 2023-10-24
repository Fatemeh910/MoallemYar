import PreviewExam from "@/components/PreviewExam";
import QuestionSubject from "@/components/Questionsubject/QuestionSubject";
import SortableTestAnswer from "@/components/SortableTestAnswer/SortableTestAnswerArea";
const NewQuestion = () => {
  return (
    <div className="flex">
      <div className="flex flex-col">
        <QuestionSubject />
        <SortableTestAnswer />
      </div>
      {/* <div className="">
        <PreviewExam />
      </div> */}

    </div>
  );
};

export default NewQuestion;
