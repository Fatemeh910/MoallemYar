import Image from 'next/image';
import taky from '../../../public/assets/img/icons/trueFalse.png';
import React from 'react';
import { Input } from 'antd';
const QuestionSubject = () => {
    return (

        <div className="w-full flex flex-col bg-red-100 mt-10 gap-4 p-3">
            <div className='gap-4 flex flex-row'>
                <div className=''>
                    <h2>عنوان سوال</h2>
                    <Input size="large" placeholder="لطفا اینجا چیزی ننویسید..." />
                </div>
                <div className='mr-auto'>
                    <p>بارم (نمره)</p>
                    <Input placeholder=' 2:برای مثال' />
                </div>
            </div>




            <div className='flex flex-col'>
                <div className='flex '>

                    <p> نوع سوال</p>
                    <p> تصویرمربوطه</p>
                </div>
                <div className='bg-white flex mt-5 border border-inherit rounded-2xl items-center justify-center'>

                    <div className=' border border-l-purple-300'>
                        <Image width={60} alt='aks cc' src={taky} />
                        <p>تک کلمه ای</p>
                    </div>
                    <div>
                        <Image width={60} alt='aks cc' src={taky} />
                        <p>تک کلمه ای</p>
                    </div>
                    <div>
                        <Image width={60} alt='aks cc' src={taky} />
                        <p>تک کلمه ای</p>
                    </div>
                    <div>
                        <Image width={60} alt='aks cc' src={taky} />
                        <p>تک کلمه ای</p>
                    </div>
                    <div>
                        <Image width={60} alt='aks cc' src={taky} />
                        <p>تک کلمه ای</p>
                    </div>

                </div>

            </div>







        </div>

    )
}
export default QuestionSubject