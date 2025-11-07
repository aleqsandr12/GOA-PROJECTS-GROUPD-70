# 1) https://www.codewars.com/kata/5a084a098ba9146690000969/train/python
# 2) https://www.codewars.com/kata/5fc4349ddb878a0017838d0f/train/python
# 3) https://www.codewars.com/kata/68b0064510c5854a66e6323a/train/python
# 4) https://www.codewars.com/kata/56069d0c4af7f633910000d3/train/python
# 5) https://www.codewars.com/kata/5b6d065a1db5ce9b4c00003c/train/python 

# A forest fire has been spotted at fire, a simple 2-element array with x, y coordinates.

# The forest service has decided to send smoke jumpers in by plane and drop them in the forest.

# The terrain is dangerous and surveyors have determined that there are three possible safe dropzones, an array of three simple arrays with x, y coordinates.

# The plane is en route and time is of the essence. Your mission is to return a simple [x,y] array with the coordinates of the dropzone closest to the fire.

# If several dropzones are an equal distance away from the fire, then return the first closest dropzone in the given array.

# For example, if you are given: fire = [1,1], dropzones = [[0,1],[1,0],[2,2]], the answer is [0,1], because that is the first closest dropzone in the given array.

# GeometryFundamentals

def closest_fire(fire, dropzones):
    return min(dropzones, key=lambda dropzone: (dropzone[0]-fire[0])**2 + (dropzone[1]-fire[1])**2)