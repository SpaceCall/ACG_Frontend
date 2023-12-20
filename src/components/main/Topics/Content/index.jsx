import React, { useState } from 'react'
import styles from './content.module.scss'
import image from './../../../../assets/icons/image.svg'
import data from '../CourseBar/recieved.data'


export default function Content() {
    const [activeButton, setActiveButton] = useState(null)

    const notes = 'Notes'
    const resources = 'Resources'
    const quiz = 'Quiz'

    const makeActive = (button) => setActiveButton(button)

<<<<<<< Updated upstream
    return (
        <div className={styles.topics__content}>
            <div className={styles.topics__content__wrapper}>
                <div className={styles.topics__content__title}>
                    <h2>The subtopic 1</h2>
                </div>
                <div className={styles.topics__content__image}>
                    <img src={image} alt="Pic" />
                </div>
                <div className={styles.topics__content__buttons}>
                    <button
                        className={activeButton === 'notes' ? styles.active : styles.nonActive}
                        onClick={() => makeActive('notes')}
                    >
                        {notes}
                    </button>
                    <button
                        className={activeButton === 'resources' ? styles.active : styles.nonActive}
                        onClick={() => makeActive('resources')}
                    >
                        {resources}
                    </button>
                    <button
                        className={activeButton === 'quiz' ? styles.active : styles.nonActive}
                        onClick={() => makeActive('quiz')}
                    >
                        {quiz}
                    </button>
                </div>
                <div className={styles.topics__content__text}>
                    {activeButton === 'notes' ? notes : null}
                    {activeButton === 'resources' ? resources : null}
                    {activeButton === 'quiz' ? quiz : null}
                </div>
            </div>
        </div>
    )
=======
    useEffect(() => makeActive('notes'), [isActive])

    const contentData = data.content.find((lesson) =>
  lesson.content.some((subtopic) => subtopic.subtopic === isActive.subtopic && subtopic.type === 'quiz')
);

const content = contentData ? (
  <div className={styles.topics__content}>
    <div className={styles.topics__content__wrapper}>
      <h2>{isActive.subtopic}</h2>
      {contentData.content.map((subtopic, subtopicIndex) => (
        subtopic.type === 'quiz' && (
          <div key={subtopicIndex}>
            <div>{subtopic.title}</div>
            {subtopic.content.map((question, questionIndex) => (
              <div key={questionIndex}>
                <h3 className={styles.topic__quiz__qtitle}>{question.title}</h3>
                <h4 className={styles.topic__quiz__q}>{question.q}</h4>
                <div className={styles.topic__quiz__awrapper}>
                  {question.a.map((answer, answerIndex) => (
                    <div key={answerIndex} className={styles.topic__quiz__ablock}>
                      {answer.type === 'radio' ? (
                        <input type={answer.type} name={answerIndex} className={styles.topic__quiz__buttons}></input>
                      ) : (
                        answer.type === 'text' ? (
                          <input type={answer.type} />
                        ) : (
                          <input type={answer.type} className={styles.topic__quiz__buttons}/>
                        )
                      )}
                      <div className={styles.topic__quiz__atext}>{answer.text}</div> 
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )
      ))}
    <button type="submit">20 bucks</button>
    </div>
  </div>
) : (
  <div className={styles.topics__content}>
    <div className={styles.topics__content__wrapper}>
      <div className={styles.topics__content__title}>
        <h2>{isActive.lesson}: {isActive.subtopic}</h2>
      </div>
      <div className={styles.topics__content__image}>
        <img src={image} alt="Pic" />
      </div>
      <div className={styles.topics__content__buttons}>
        <button
          className={activeButton === 'notes' ? styles.active : styles.nonActive}
          onClick={() => makeActive('notes')}
        >
          Notes
        </button>
        <button
          className={activeButton === 'resources' ? styles.active : styles.nonActive}
          onClick={() => makeActive('resources')}
        >
          Resources
        </button>
      </div>
      <div className={styles.topics__content__text}>
        {activeButton === 'notes' ? notes : null}
        {activeButton === 'resources' ? resources : null}
      </div>
    </div>
  </div>
);

return content;

>>>>>>> Stashed changes
}
