[
  {
    "code": "public static void sort(Comparable[] a) {",
    "impl": "(function(that) {\n  sort(a) {\n})"
  },
  {
    "code": "  int N = a.length;",
    "impl": "(function(that) {\n    that.locals[\"N\"] = that.args[\"a\"].length;\n    that.nextLineNumber = 3;\n})"
  },
  {
    "code": "  for (int i = 1; i < N; i++) {",
    "impl": "(function(that) {\n    if (that.cache[\"3__firstIteration\"] === undefined) {\n      that.locals[\"i\"] = 1;\n      that.cache[\"3__firstIteration\"] = false;\n    } else {\n      that.locals[\"i\"]++;\n    }\n    if (that.locals[\"i\"] < that.locals[\"N\"]) {\n      // TW NOTE 4/12/17: This appears to be an error that I just happened to\n      // notice, but I can't test the fix without a front end. So if this is\n      // broken, it's probably that this fix broke it.\n      that.nextLineNumber = 4;\n  //    that.nextLineNumber = 6;\n    } else {\n      that.nextLineNumber = undefined;\n      that.locals[\"i\"] = undefined;\n      that.cache[\"3__firstIteration\"] = undefined;\n    }\n})"
  },
  {
    "code": "    for (int j = i; j > 0 && less(a[j], a[j - 1]); j--) {",
    "impl": "(function(that) {\n    if (that.cache[\"4__firstIteration\"] === undefined) {\n      that.locals[\"j\"] = that.locals[\"i\"];\n      that.cache[\"4__firstIteration\"] = false;\n    } else {\n      that.locals[\"j\"]--;\n    }\n    if (that.locals[\"j\"] > 0) {\n      //that.vm.visualization.highlight([that.locals[\"j\"] - 1, that.locals[\"j\"]]);\n      //that.vm.visualization.stepall();\n      that.vm.invokeFunc(\n        \"less\",\n        function(result) {\n          if (result) {\n            that.nextLineNumber = 5;\n          } else {\n            //that.vm.visualization.unhighlight([that.locals[\"j\"] - 1, that.locals[\"j\"]]);\n            //that.vm.visualization.stepall();\n            that.nextLineNumber = 7;\n            that.locals[\"j\"] = undefined;\n            that.cache[\"4__firstIteration\"] = undefined;\n          }\n        },\n        that.args[\"a\"][that.locals[\"j\"]],\n        that.args[\"a\"][that.locals[\"j\"] - 1]);\n    } else {\n      //that.vm.visualization.updateBoundary(that.locals[\"i\"]);\n      //that.vm.visualization.stepall();\n      that.nextLineNumber = 7;\n      that.locals[\"j\"] = undefined;\n      that.cache[\"4__firstIteration\"] = undefined;\n    }\n})",
    "note": "(function(that) { return \"Here's an example note that shows i=\" + that.locals[\"i\"] + \".\"; })"
  },
  {
    "code": "      exch(a, j, j - 1);",
    "impl": "(function(that) {\n    //that.vm.visualization.swap(that.locals[\"j\"] - 1, that.locals[\"j\"]);\n    //that.vm.visualization.unhighlight([that.locals[\"j\"] - 1, that.locals[\"j\"]]);\n    //that.vm.visualization.stepall();\n    that.vm.invokeFunc(\n      \"exch\",\n      undefined,\n      that.args[\"a\"],\n      that.locals[\"j\"],\n      that.locals[\"j\"] - 1);\n    that.nextLineNumber = 6;\n})"
  },
  {
    "code": "    }",
    "impl": "(function(that) {\n    that.nextLineNumber = 4;\n})"
  },
  {
    "code": "  }",
    "impl": "(function(that) {\n    that.nextLineNumber = 3;\n})"
  },
  {
    "code": "}",
    "impl": "(function(that) {\n  }\n  \n})"
  }
]