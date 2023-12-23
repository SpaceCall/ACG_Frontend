import React, { useEffect, useState } from 'react'
import styles from './content.module.scss'
import image from './../../../../assets/icons/image.svg'
import CodeMirror from "@uiw/react-codemirror";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import { StreamLanguage } from "@codemirror/language";
import { python } from "@codemirror/legacy-modes/mode/python";

export default function Content({ isActive }) {
    const [activeButton, setActiveButton] = useState('notes')

    return (
        <div className={styles.topics__content}>
            <div className={styles.topics__content__wrapper}>
                <div className={styles.topics__content__title}>
                    <h2>{isActive.lesson}<br /> {isActive.subtopic}</h2>
                </div>
                <div className={styles.topics__content__buttons}>
                    <button
                        className={activeButton === 'notes' ? styles.active : styles.nonActive}
                    >
                        Notes
                    </button>
                    <button
                        className={activeButton === 'resources' ? styles.active : styles.nonActive}
                    >
                        Resources
                    </button>
                </div>
                <div className={styles.topics__content__text}>
                    Code Optimization is the process of improving a program's performance to make it execute its tasks more efficiently, quickly, or with fewer resources.

                    The primary methods of code optimization include:

                    Code Profiling: Using tools to analyze the program's execution to identify which parts of the code consume the most time and resources.
                    Example in Python:
                    <br />
                    <CodeMirror
                        value={`import cProfile

def example_function():
    result = 0
    for i in range(1000000):
        result += i
    return result
cProfile.run('example_function()')`}
                        height="140px"
                        readOnly={true}
                        theme={okaidia}
                        extensions={[StreamLanguage.define(python)]}
                    />
                    <br />
                    Efficient Algorithms and Data Structures: Choosing the right algorithm or data structure can significantly impact program execution speed.
                    Example in Python:
                    <br />
                    <CodeMirror
                        value={`# Poor example: finding the minimum element in a list
lst = [5, 2, 9, 1, 5, 6]
min_val = lst[0]
for i in range(1, len(lst)):
    if lst[i] < min_val:
        min_val = lst[i]
    
# Better example: using the built-in min function
min_val = min(lst)`}
                        height="150px"
                        readOnly={true}
                        theme={okaidia}
                        extensions={[StreamLanguage.define(python)]}
                    />
                    <br />
                    Caching: Storing the results of certain operations for later use to avoid recomputation.
                    Example in Python:
                    <br />
                    <CodeMirror
                        value={`from functools import lru_cache
@lru_cache(maxsize=None)
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)`}
                        height="110px"
                        readOnly={true}
                        theme={okaidia}
                        extensions={[StreamLanguage.define(python)]}
                    />
                    <br />
                    Parallel Execution: Distributing computations across multiple threads or processes to improve execution speed.
                    Example in Python:
                    <br />
                    <CodeMirror
                        value={`from concurrent.futures import ThreadPoolExecutor

def example_function(x):
    return x * x
    
with ThreadPoolExecutor() as executor:
    results = list(executor.map(example_function, range(10)))`}
                        height="100px"
                        readOnly={true}
                        theme={okaidia}
                        extensions={[StreamLanguage.define(python)]}
                    />
                    <br />
                    These methods can be combined and used together to achieve the best results
                </div>
            </div>
        </div>
    )
}
