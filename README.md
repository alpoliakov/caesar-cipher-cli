# Caesar cipher CLI tool
## Description 
[Caesar cipher cli](https://github.com/rolling-scopes-school/nodejs-course-template/blob/master/TASKS.md#task-1-caesar-cipher-cli-tool)
## Run app
1. Install
```
npm install
```

2. Run script (example)
```
node index -a encode -s 3 
node index -a decode -s 3
node index -a encode -s 3 -i input.txt -o output.txt
node index -a decode -s 3 -i output.txt -o input.txt
```

3. CLI tool accept 4 options (short alias and full name):
```
-a, --action: an action encode/decode
-s, --shift: a shift
-i, --input: an input file
-o, --output: an output file
```
Action (encode/decode) and the shift are required.

## Criteria for evaluation
[Criteria](https://github.com/rolling-scopes-school/nodejs-course-template/blob/master/CROSSCHECK.md)
