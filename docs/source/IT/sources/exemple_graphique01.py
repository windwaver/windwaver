# -*- coding: utf-8 -*-
"""
Exemple de plot
"""

from __future__ import division
from scipy import *
from pylab import *

x = linspace(0,10,400)
y = sin(x)*exp(-x/5)
plot(x,y)
show()
