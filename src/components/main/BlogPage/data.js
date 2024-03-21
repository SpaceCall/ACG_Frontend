const tableItems = [
    {
        id: 1,
        name: 'Why Python?'
    },
    {
        id: 2,
        name: 'Getting Started'
    },
    {
        id: 3,
        name: 'Variables and Data Types'
    },
    {
        id: 4,
        name: 'Example: Variables and Data Types'
    },
    {
        id: 5,
        name: 'Control Flow'
    },
    {
        id: 6,
        name: 'Functions'
    },
    {
        id: 7,
        name: 'Object-Oriented Programming (OOP)'
    },
    {
        id: 8,
        name: 'Resources for Further Learning'
    },
    {
        id: 9,
        name: 'Conclusions'
    },
]

const contentItems = [
    {
        id: 1,
        title: "Introduction to Python Programming: A Beginner's Guide",
        description: "In the ever-evolving landscape of technology, learning to code has become increasingly essential. Among the multitude of programming languages, Python stands out as an ideal starting point for beginners. Its simplicity, readability, and versatility make it a favorite among seasoned developers and novices alike. If you're new to the world of programming and eager to embark on your coding journey, this beginner's guide to Python programming will serve as your roadmap to understanding the fundamentals and unleashing your potential."
    },
    {
        id: 2,
        title: "Why Python?",
        description: "Python's popularity stems from its user-friendly syntax, which resembles plain English, making it easy to learn and understand even for those without prior coding experience. Its versatility allows you to develop a wide range of applications, including web development, data analysis, artificial intelligence, scientific computing, and more. Additionally, Python boasts a vast ecosystem of libraries and frameworks, such as NumPy, Pandas, Django, and TensorFlow, which streamline development and empower you to tackle complex projects with ease."
    },
    {
        id: 3,
        title: "Basic Concepts",
        subtitleTop: "Variables and Data Types",
        description: "In Python, you can store data in variables. Unlike other languages, Python is dynamically typed, meaning you don't need to declare variable types explicitly. Common data types include integers, floats, strings, booleans, lists, tuples, dictionaries, and sets.",
        subtitleBottom: "Example: Variables and Data Types",
        code: [
            'name = "Alice"',
            'age = 30',
            'height = 5.9',
            'is_student = False'
        ]
    },
    {
        id: 4,
        title: "Control Flow",
        description: "Control flow statements like if-else, for loops, and while loops allow you to control the execution of your code based on conditions.",
        code: [
            '# Example: Control Flow',
            'if age >= 18:',
            '    print("You are an adult.")',
            'else:',
            '    print("You are a minor.")',
            'for i in range(5):',
            '    print(i)',
            'while age < 40:',
            '    age += 1',
            '    print("Happy Birthday!")'
        ]
    },
    {
        id: 5,
        title: "Functions",
        description: "Functions are reusable blocks of code that perform specific tasks. You can define your functions using the `def` keyword.",
        code: [
            '# Example: Functions',
            'def greet(name):',
            '    print("Hello, " + name + "!")',
            'greet("Bob")'
        ]
    },
    {
        id: 6,
        title: "Object-Oriented Programming (OOP)",
        description: "Python supports object-oriented programming paradigms, allowing you to create classes and objects to model real-world entities.",
        code: [
            '# Example: Object-Oriented Programming',
            'class Dog:',
            '    def __init__(self, name):',
            '        self.name = name',
            '    def bark(self):',
            '        print(self.name + " says woof!")',
            'my_dog = Dog("Buddy")',
            'my_dog.bark()',
        ]
    },
    {
        id: 7,
        title: "Resources for Further Learning",
        description: "As you continue your Python journey, there are countless resources available to help you deepen your understanding and hone your skills. Online platforms like Codecademy, Coursera, and Udemy offer interactive courses tailored to beginners. Books like 'Python Crash Course' by Eric Matthes and 'Automate the Boring Stuff with Python' by Al Sweigart provide comprehensive guides for learning Python programming. Moreover, don't underestimate the power of community and collaboration. Websites like Stack Overflow and GitHub are treasure troves of knowledge, where you can seek help, share your projects, and contribute to open-source initiatives."
    },
    {
        id: 8,
        title: "Conclusion",
        description: "Python programming offers a gateway to the world of software development, empowering you to bring your ideas to life and solve real-world problems through code. Whether you aspire to become a data scientist, web developer, or AI engineer, mastering Python will undoubtedly accelerate your journey"
    },
]

export default { tableItems, contentItems }