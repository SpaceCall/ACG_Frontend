const data = {
  "title": "курс по программированию",
  "content": [
    {
      "title": "Lesson 1: Introduction to Python",
      "content": [
        {
          "lesson": "Lesson 1: Introduction to Python",
          "subtopic": "Understanding Python Syntax",
          "content":`Python's syntax includes the structure of the language and the rules for writing correct programs. Important aspects of Python's syntax are:Comments start with the # symbol.
          
          
          ${`<CodeMirror
            value={'# This is a comment'}
            height="200px"
            readOnly={true}
            theme={okaidia}
            extensions={[StreamLanguage.define(python)]}
            onChange={(value, viewUpdate) => {
              console.log("value:", value);
            }}
          />`}
          The end of a line signifies the end of a statement.
          
          code
          x = 5
          Semicolons (;) can be used to separate statements on one line.
          
          code
          x = 5; y = 10
          
          Indentation is important for defining code blocks.
          
          code
          if x < 10:
              print("x is less than 10")
          
          Parentheses are used for grouping or calling functions.
          
          code
          print("Hello, World!")
          
          Variables and Data Types in Python:
          
          Variables in Python are created when values are assigned to them, and the data type is determined automatically. Python supports various data types, such as integers, floats, strings, lists, tuples, dictionaries, and others.
          
          code
          x = 5  # integer
          y = 3.14  # float
          s = "Hello"  # string
          lst = [1, 2, 3]  # list
          tpl = (1, 2, 3)  # tuple
          dct = {"one": 1, "two": 2}  # dictionary
          
          Basic Python Operators:
          
          Python supports various operators for performing arithmetic, logical, and comparison operations, such as +, -, *, /, %, **, <, >, ==, !=, and others. Python also supports assignment operators, such as =, +=, -=, and others.
          
          code
          x = 5 + 3  # addition
          y = 5 - 3  # subtraction
          z = 5 * 3  # multiplication
          w = 5 / 3  # division
          By studying these topics, you will be able to understand the basics of Python and start writing your code in this language.`
        },
        {
          "lesson": "Lesson 1: Introduction to Python",
          "subtopic": "Variables and Data Types in Python"
        },
        {
          "lesson": "Lesson 1: Introduction to Python",
          "subtopic": "Basic Python Operators"
        },
      ]
    },
    {
      "title": "Lesson 2: Python Data Structures",
      "content": [
        {
          "lesson": "Lesson 2",
          "subtopic": "The subtopic 1"
        },
        {
          "lesson": "Lesson 2",
          "subtopic": "The subtopic 2"
        },
        {
          "lesson": "Lesson 2",
          "subtopic": "The subtopic 3"
        },
        {
          "lesson": "Lesson 2",
          "subtopic": "The subtopic 4"
        }
      ]
    },
    {
      "title": "Lesson 3: Functions in Python",
      "content": [
        {
          "lesson": "Lesson 3",
          "subtopic": "The subtopic 1"
        },
        {
          "lesson": "Lesson 3",
          "subtopic": "The subtopic 2"
        },
        {
          "lesson": "Lesson 3",
          "subtopic": "The subtopic 3"
        },
        {
          "lesson": "Lesson 3",
          "subtopic": "The subtopic 4"
        },
        {
          "lesson": "Lesson 3",
          "subtopic": "The subtopic 5"
        }
      ]
    }
    ,
    {
      "title": "Lesson 4: Python Modules and Packages",
      "content": [
        {
          "lesson": "Lesson 4",
          "subtopic": "The subtopic 1"
        }
      ]
    },
    {
      "title": "Lesson 5: Object-Oriented Programming in Python",
      "content": [
        {
          "lesson": "Lesson 5",
          "subtopic": "The subtopic 1"
        },
        {
          "lesson": "Lesson 5",
          "subtopic": "The subtopic 2"
        }]

    }
  ]
};

export default data;