__equality_command_list = []

with open('EquationScraper/latex/equality_commands.txt', 'r') as __f:
    for __line in __f:
        __equality_command_list.append(__line.rstrip())

__MIN_SYMBOLS = 16


def equality_commands():
    return __equality_command_list


def strip_styles(latex_string):
    latex_string = latex_string.replace('\\displaystyle', '')
    latex_string = latex_string.replace('\\textstyle', '')
    latex_string = latex_string.replace('\\scriptstyle', '')
    return latex_string


def contains_equality_command(latex_string):
    for cmd in equality_commands():

        if (latex_string.find(cmd) != -1) and len(latex_string) > __MIN_SYMBOLS:
            return cmd

    return False
