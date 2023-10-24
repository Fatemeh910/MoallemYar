import React from 'react';
import { Input } from 'antd';
const QuestionSubject = () => {
    return (
        <div className="w-full flex bg-red-100 mt-10">
            <div className='gap-4 flex flex-row'>
                <div className=''>
                    <h2>عنوان سوال</h2>
                    <Input size="large" placeholder="لطفا اینجا چیزی ننویسید..." />
                </div>
                <div>
                    <p>بارم (نمره)</p>
                    <Input placeholder='برای مثال' />
                </div>
            </div>

        </div>
    )
}
export default QuestionSubject