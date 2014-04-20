function minesweeperGame(w,h,n){
	var div=document.createElement("div");
	div.style.margin="0 auto";
	div.id="minesweeperDiv";
	var canvas=document.createElement("canvas");
	canvas.id="minesweeperCanvas";
	canvas.width="500";
	canvas.height="500";
	canvas.innerHTML="Your Browser Doesn't Support HTML5 Canvas Element";
	var sprite=document.createElement("img");
	sprite.id="minesweeperSprite";
	sprite.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUUAAAAZCAYAAACmTzxlAAAfAElEQVR4Xu1dB3RUxdf/ZZPd9A7pCQkktNBbpEmv0oTQpPMHQZqKiGIDBVGxIaIoFhSQLgiRjhRBeuiQBALpjfRedpP97n2bLdlsNrtL9PMccznvbNj3Zu7MnZnfu21mzSoqKuQoL0dZhTmKpBWoK7KViGABGczMzQEzMzAPGf1dUV5XHAARVW0uq+dhiETrZWWIlBTP1MvqyWT1d2LJpcuX0SwoCHYOLgwpdUYMU/m5mYiJjYVZeXm5fNO5Aqw9koUSqbzOmFiLzbByTAOMaGsFuUiExBw5HmVUgCC4zsicsDbI3RyethX1PGqRar2sDJ929bIyXVZ/N5Zk5+UhJ9cR96MJS3TocOXlMkilZXSVQFpWivIKUprMSEGzEEMitoKFWEJ/SyAiTNIkfhG2amEOUUUSzMqkFfLGS+JgZ1WHaFXJzdVWhHNv+KCCGnAyUgZG47omMfWtR4ConocBgq2XlQFCqnzkvyargrwcyOUVAoAw2Tk4GSwspaykchH+diyh9h08KiNgq9o8BsOyshIUF+WjoCCbrlwUFeUROJZCRGUsrWxgY+MAe3tn2Ng6wtrarho4SsRAv54imGUXyuSBS+Ph6WCwDAx+UErqbeSH/mCr/FSUDBKtjhhckZ4H5YTlfZpa/Kt4VNDkKikrhNjCEmJziUHdNLofVMCsIB9yKyuA3n6GkNE8DKlU65l/O49yUi/MtbQEXd38t/ZDSgu/guxGiaU1zOqoH/kEiG/OGlJFDO9/fxj2BgKjIKtmYuQUlUMbS6xL8tAk8bpQd6G1I2K825kwqwAllpRJgcPHZARyimrI/QeZrAxFhXnIzctAVmYqXcnIzn6M/Pws0hZLyB1iDisrW+qPK1xcPNCggQ+cnd1gRwDJ4GhurgAmWrYYMsBCAYpNX4uHt6NJba2xEAvqQToJYmMAdUiOU/epI3UNisSjiIQ0JFisl4dMVo74pAxEx6bRlYr8gmJVu7u0D0SfbsE1d94AHqXSYtyIu4C7yZfw4PFtpOcnk5tA4fBwtHZFsFdnPNN2Cjyd/HTzMYAHF3T9fStcYqNgnxIHSUEeRDyKRKW2DshpFIT4LgMh7dD1iXhoF46JScJPW8OqfD1pwhA0DWpUnY+B/Yj96FVIUxP0TjhzJ1c0Xv6VyTyUBctIgziZcAdXUx8huTAbMhoXa3pRNbC2RwsXb/Tzaw1nWjBVyIB+/H71Im7HxRi0aHwaNMSUXv2N5qEsEB91C1eO/4qUh3dQWlQgfC0ie8/ZoxFahPRBx76jYCHR8WI0oB95uQSI/xss1Pn+D0eETyVAfrwxDFbODfT3UYMHg6I2ltgVZmLmtW/wXGkEdkua4ZxjK6Q0bIIEz1aQV2qltQlRE0vKyuQ4fFwGawJFBkTWDlkzzEhPQnLyQ9y/H45rV0/Q39GCGa1JNrROmjfrjLbtesM/IBgeHv5wJpBkDZLN6sJCYPQIsQIUm78eD1/DteXa+iDcj8kCMomJfJMCFE//DaBYQoDIWugzrRSgWBOPH7b9gcs3H+ps94CebRA67Kka+2QIj/MPjuGHs+/rlYvE3BLz+q5Ca98u1Z4zhAcXCnl1HES0yPVR5MAJyB48zmQemgV50i1fuQEPHyVWqW/Jy1PRoV0Lk3lEzn8W0gTd46Gs1NzVHS03HTeZBxfMKM7D2vBDyCBtpSaa13YQ2jSsCvCGjMePfxzG+ah7Bq2FQA8vvD56YpVnDeHBBcJP7sepXRv08nHzbYrnln4iLGxN0uZx8k4RrG3Uz+QyIJKG6Ebgsfx/SyEfPl4ofnDHt7i48zuMD2yBZqu+g4j8ceY1+L40eTAo6sKSkGs7sD73UJW2PTBzxGr34bjTYmCtMtTEEgbFIwyK1hAAMY+CI6mpsXj06DaOHf0Zjx7eJBeAmdBehRYpEz41ycbGHt26j0SXkMHw82uOBg19qIwD+R8tMPbZSlBssSwe/i61ts3gB9LyCRQzFY9rgqIV2ex1RWWEDSWV+KAJirp4fL/tBMJvPdLJun+PNhhTAygayuP8/WP48exqVf2WFtaCg1dWQaitQY7WLvhg7DbB4askQ3nw811ef04FilIyn0QyKcy1QLKCNIhLS9fBzLWhSTw023vy1GX88PO+anJb8tJUtNcCRWP6EbFgNKSJ+rUscxc3BP94tApvY3iUkEm18vweZJUqNCsmMcnGzcaRxqUC6UW5oPAc5rUbhNYaoGgoj00EihciDQPFpt6+WDJK/aIylEdRXjY2vD6FzGX1i7ChdxPYkhadGHVDMBuV9PToWQgZFKp3zDt27CzcZ9OYSaURfrIVHT57C+lDxyJz8Gh8sWIhmu7bjAHlFfhx5DhUkFbt2dAd3UpLYTl0PBwILJlU/SBV7pnWEsF81oUlna7uwJcFx3Suv4MiX2z1HYq4Rp2FYCkTRX8hrwRhbSwRQPEEWZ0SGWmIOaQRPkL0gxv4be96pKQ8hJOTE1xdXQk0rUlTlCInJwdZWVkoLi4mn6k6bsKBll69x6JHz1Hw8g6ml4UXmdh2GD/GUqEpBr8Rj8auOtts9Jf5pcCtJALDypJKUDxDmmJdgSIphSggPkpSgmJNPLbvO4uM7Hw08feAi5MdNu8+rSrbnzTF0UOra4rG8GBQ3Hr+M3QLGoynmw2DX4NAwWl9JuJ3bLv4RZXBmN3rbXQJ7CPwN4YHP++zdS1Sm7aHtGUHmNnZKxb6lT/RJmwTLMihrKSbw2egpNsAk3go6ygoKMQrr39KJkUx+a7MyN+inlCvMCi2VWuKxvbj3qJQFSja9x4GsXdAtXkmItD3HqbQXEyR1e6o8zgdf0dVvm+j1hjepDMklf6jYlkpmdQP4efQEI3oMpZHVFI8UnOyda6PO2RW34pVa8ITevZFn9btjeYRcfVPhH2nftm2COmP4TOXCPUkPLiD7Z8o/mbya94BE15WPKtvPBZPrOpe+WLbKUhoaJu/NBkWGanY1b0fwk4cwGvREfCFGf7n4y34rKcRqPjQ9X3vgQjs1h8hfUfSGreG473rkNo7oveI1gIo6sKSdlcIFEtO6ZSV8ss8iJEop/rMpFht2xO3OoyBLixhUDxKoCgSFSE9PVEAxOPHtuJa+Akyhz3IrROEps2awcfHB2mP0xAbE4v7UfeRkJhAgZeiKm1gYBw/8TUEBvWCt3czONA8mDjOVgGK3i/Hw4sCLS42gIZ2rbcTum6yM/QquYpKNSw8JSieoOgz+xTFnFtIqTSmEq9NFpZmao8SFA3h8TgjF+9+tlPFvh9pitqgaCyP+IyHsBRbw93Rq1q3Np58H1cenVR9P7z9NIzoOFVo/5P0Q5OR++5v4XfzL9VXtwdMQEmvoU/E47tNv+LMn1cFU6RfnxCcOHlRVf/iF9Xmsyn9uPPiOEiTYoX63Oe/C68+VZ382kI0lkdJuRRvnNqCUtLWmVo18MMLHRR+s5rIWB766lq1awsS0h8Lj0goTLpmxlxYSyyNHo+bfx3H4Z8/VbEaOecttOjYQ/X/zxaNRlmJYqF7BLTE9GWf1cpDVpyjKu/qXOkzI83Zd8Ui+GzbiN/IN1lAYz6KtMJi+vzF1QnN6H7PnFxcbOSPb9q0hTQzEwPt3NBfYoPyFu2RPGQ8BvTyFkBRF5a0vrwD66RnDV7yCyz74Eb7UJ1YwqB44FAZSkvSyWyOQsTd8/hp03sUVbZDcHAwxowZg0GDBpGv0JmCL0W4ePEidu3chfDr4UhNSaXcxqrJja4UdBk3/h00btIBDd38MW2SqwIUnefHqxrMoOhmBzSky1Ft5dXaIdYjrhEgZqtjGEIZJSgei1AjJSke9MZWXBZGpOmw9stAItPKT1KCoiE8GBTf0wDFvlqgWBc8NIX1e/gvOHDtJ9VXozrOxJD2E5+4H5o8PLZ/BZ/IcNVXl8a9CFHLtibziH4Yj3ffV/ix+vUOQeMAX3y3aY+q/sWLFOazqbKKeGWCChQbTFsMK69GqCgrg7WbBxwbB1WZa6bwuJsZg8231P7IeR2HogVNfo48V1CFYi3/mCk8apq7j9JSsGbPNlUferRsg8l9Bpgkq/S4CGxb87Kqrn7jX0CX/iOF/5cUF2HtS6GkwSsWQ6vugzFs2ksmj3nS/HEYeOQ3sP2RQ+vTlnCglNZ/vpUIDcjRwK6qA/aeSLV2QK/HGbDJz0d4+6dg99kuWFIiNa9BBkVdWPJMFPkUzdUv1drAZKF5D/ziEaoTSxgUd+8rQGZGAmIeXceRw1+TJngR3l7e6NqtK5YsWSKAo6WlpQCAiYmJWPvFWpw8eQoP7t8nP2TV4Atri0OeWYCOnYbBx7cFZs8g/6I2KGo2mDU7BsgGfFGATp+GF0WRZqUfUbMOXaCoeZ8BkrVHnmT8qU+JLCQXHTt2tUkXKNbEIyc7F6vWqjXFPt3b4NkhavO5Lnho9uPHU2twKfqEqjkLB32AAM+OT9QPsawEFiI55OQrcbhHGf4Xj6oi0ZleAYj93zKY2g/OS3iLor5pKcnwoEH/ePUr9Ja9h+81QPFlBkUyn03lkTSlJ6SP6Q1qT0vQjiaXRmqJuaMLHPs9i4BxMwWZmcJjW+xlhCXcEBY4X3Nb98Zf8fcQn/tYcOs4SWzRyTsIA5u0h5W52CQe3DZdc/dn8jVe0vA1Lhs/Bb4N3EzmsX/tYqQ+uivsCrO2c0S/8XNgRzK6eHQvYu9eFmRkToGQ6W99CTvSdIxaH/Q2sMxMQ87Braj48RMMpvnEQ0EKIOBMF7vUOCuFFReKEyRnieCUWYH7ZRJstrTBXgKeSQtWovfI6TpBUTnpZ93fge+uryR11kNxubtXGXPt9Tyn4Cls9FL7R5X3GUsYFLfvziKtL5rA8BK2bX2TfIfFFDDxQ+/evfHqq68iMDAQYrFYCLCkp6dj48aN2LdvHyIiIlBSUlINP1q27ImhwxchIKAd5s5urB8UtYHFlYDRg2aZB5namuk1SbnA9aoBSlXR2kBRu4UMKJYMkgTIPOmUxCY5a4m6qDZQ1CyT8jgXb3y4k1JlaLxp8Dn6PKoSFOuKB/PjfmTmxeHjsHmQVzrK3R198caY75+oHyKKuPUfStoUazsuFB3z9BQmWrmNLZKC2uLx4ImQ0qw2VVYHj1zAhh8OCCJ7eX4oBvfriAt/hWPr1j2U36eQ5EsEii2DW5jMI+m5bpCST0wg3gLKwOhIq4+vyqxc+6794T9vuUk81kWdxJ+Po1XDztOIOAjrmw1GZWaYp50L5nQaAVm57jxPY+YVM+PUrGVbvyVPWzksiKm/uydeDX1OcCeZOh6lxYU4u/MLPLx2hsyuSr8uy6zycmrojaHTFsGrSRujeIizM+Czfws8j+5BBQVtJBSUsGRBMSCyi5UD8k0qP9nIY2OSYpUxcSJsLLTBTnNrQetu3q4r5qygSHU392qaonIABFA8/4Z6GfLcbUhMyO8nXASuKoqLwwzz0fgpqGZQ3LI9FYkJ9xBx7xx27XhXKOrl5YmQkKcwf/58dO7cWRVoiY2Jwbr163Hm9Gk8jH6IMq00HS7r7d0cz4ayb7Ez5s9pZjgoqlut+MuZQMWdANKJhHiFBEaBKp1kLChqVmLBb61KEzufAL6mPTfGTF4GxYUr1Jri2EFtMCP0KcGMryse3Ifs4nSsOD4NqfnxsIIEjiJ7vDl4PTycWz9RP1SgqCVtOUXc0gaMRMzEBSiwbWgSj9zcAjy/iIIrRSUIbu6Pj1bOEbicOBWOtV/vgTVlD9iSSfX20qkIbE7ms+4hV6VIabozNB9VgqKFpx/EAc0gLy1BaeRNyCkBF7b05nWgt66NDdxf+gTWT/XTyUXfmH9w9wjCs9QuIa7AhnITfW2ckVCUTdHNMvBeBV7/jT2aY07Q00bz0FUg7MZV/HyewIvrprn78sDB6NUy+InmlbS0GNePbcedPw9AWuk/1OTt27Iz+oyeARt3Cu4ZMx6kRblePg2XsK2QHN0NV/IhmtHbQsJvDl+6mtPF2WNt6SKlBxfoukHAf5+wMVOECxUSnKEAzAN6kU1dsx2Lxnc3HBS129mAciG9yB/PL/lz5zAjZLVeUNz8SzLiYm8hMuIv7NmtSIVzoDnTjAIsXbs+hXHjxsPNzY2St/Pxxx9/4Nix47h9+5agNWqn53BZN/cAjAldhqCmXbBwXrDpoFiD/Kt9/SSgaCiPJwHF4f3aYNqYmvMUlW0whkdWURreOzETKflxQnEz+vdij0/QtdEgvV0yhIcZvek6vjYJZnSyhiSHfDsUsDDTSDUo9AnAxQ1HUG7NS7466ePx+Ve78cfpa8K+0HUfL4S/H5k6REpQVNb2zutT0aVj9TxFQ2WV9+sPsO70NMSUcK6k8twspC+bhpIrClBhsqEIp9tHW4zux0d3j+JKlkL2TA6UAvVph1A4kwadWVqIJdd+RT65IJgsKIH4567TyTqpvrPAkPFQ8uB0j0XbNiElVxGRtqMtFxunzRECLfpIHw/euhb2xRKkxShSfzhhu0nH3rCiJOTY2xeQT7s3hD5IrPDMgg+FYIsu0scjISIcNxePw6ykRDS1oF1SBIoSUt7AQ8PAyLFDyjkGN4EAsYTEmplL2Qjkxson2UWJLSAPnYXxW9abDopajZ7RfU2toJggaIpnsXsnmeWCbMj3SeDq7+8vXE5OzvRyL0QS+RQfPYpBWloqSgn4dZGnZxDGjF2GJoGdsOCFFvWgWNegmFGYIgBiWoFixwYD4ryu7+PpxiP0Lg6+acwiVFZmnRyHtu/NhUO0Ov0k8oXliB8zy6gFUlRcinFTVwhlunYJxsTQvqryl65G4Jddar/onBnDEdzCH64uDmTxsmFalUzpB9cgjY9G0pgOqsosKADjs/+2Uf3gh9dFnSLz+YGq3EDPlng+UB21/fbBWRxPjVDdX912JJo6kJ/rCfpxKzEO7x1QB6NGtOuEqd16PdGYR5Kv+Mwv6uhzv2nLENhJkc5VRmb1jpUzUJyviCa7EyCOWrzWaFllHN0FyfI5GErbOazZPcLvUs5ZZnG40cWeBQ6ecjA9DYilKMyGcjEuU5RaTiBdQa6C4TNew5uU56gdaFE2hs3n9RdX4LRHCLItHRGUF4sOmXdqjB/UBorbdmUQ2EUhKvI8tv/ytipfkxO27ckV40DaKwdaOHGbtcU8OkRCO8CiKahAAsPhoxYjoHF7vDA7sB4U6xIU0wuS8e6JGUgvpERNIt5cP7/ravQMGFbr4uAHTAUTl2vn0GmpesdE6tPP4NY73xi1QAooH3HC9PcMaqfyoZlThtC2qOqmp6n94Hpjn6IVWemDFdk7we9kVTNYyVsfj93x17Az7qqqLxMpMXiMnyJPkOlXur9d4/5brYainTOrR1XJmH58fOQALj1SA/GXk2bC05GjFfpJH4+Tmz/Cgyt/KCogH+Kszw+q9unyV9XufxoGcx374Gvi4XzjAtzXL4fPpdMcR1GY36TYClknDI78yUDJwU3ancbgmEHB28ukla0m0IkkJzNraAtXbMTKlyboBcXBSX8itM/XKmEEEjDOi9yKadG/wqWM7XM11QaKu/bmIf1xLKKjr2Lv7g8oNUedE8opZNwm/mTtnc1lzaRtXaPR4+mJlMg9mYI1rTCrtuhzbQNqyP3/ivn8uCBRAETWFJlEZuZY1P0jMpn158dpytCYRahZzunOFXR5abTqq8wOPRBOfh5dVBOPfwoU5XSckxnl7OkiKWm9SSNbq26Zqilez0rA+3cVuzaYRvm0xeSAENX/t8Rcwv7Em6r/r2k/Go3tqu/xNXQ8sgsLMGfzRiHwwNTWtxHeHl49UGDMePCzhza8iYR7V4RifPgDgyKb0Eo6tfUT3L+k3ikyedV22DpW34Whsx+UruJw/xbMbl/Bvi2fIz6eghAUF5hEYDKQ4DGPIkVOZnIBF0kdpBcVYSJ1bx853+PoGd44uZ2eK3d1w1vr9mHh2BCjQFHZB8vyUvRKvYwm5GqylRUjzs4bJzy7CxqlNimjz3sPlCA3Jw1sQt+4fhQHw9bpnE+GfGlNu3UmTlolBFk8vQIxfXLDek2xLjRF1hCXH5+KzCKFj4cptPU8hPgpdpVokh15sl1s2C6pTvoWod/eH1Hs7o0MCjzINfxfopJiMp/noOFl9Y6BxCETce+VNUbxKCwswYx5H+oswwdqlPGerkqytOS9sCJMmTAQw4d0q1ZGXz/yuR+XTsFxxhJYNmcvvoIqyBxMf3Mmis+qwcxmwGi4rf7JqH7ww1Lyt866tAWFldvgGPA+avesSnt49Tqls9BBBUxWIgv8RD5FCx0nzhgKiruvXsDOy+dV7Vw6hPbVBgTqbLf2l/p4nNn2GSIvKA5pYBo6bzV8W3QS/i6nLZ47Vs5EQRbZtEQimhMzP9kvpOcYw4O1qB0bVmDHxjXoR0D5PBVOItC7Qb7CV6QyBNF93ijJiiLr0l+Tj3QpXd7EP4XmRYfBY/Diyh8wupOjSaBokJAqH1KC4v6DMuFYMEFbfHBFAMXERLU7xJg6u/UYh+50+foFU5zHG5PG2/83QPHHXedx5AzlelWS8o2u/L+I0xuEiWWGHeuM88VxubMxYVh/fplBY9E/cCxmhyzX+ay+BRJMSbzex/ZASrlquc3boYxOLxGTP8npbrjwqUlXP9qGrI49jeZRUwfqMtDCQZasDxUJyRYUaJE0Jc2Qgkelty+jPFOxC0RJHt8cgpXGDg7Ne7UB1t6E69gWq9CymDo4+6GNszduZifierb6hJ5h3q0xvbHuk4Vq48H1ckL4vK3fI5OOcWNysbXDhimzDTqejJ/XxyPm5jkc+17t0pDQmYDBT4+AJQVaOEUnPS5K1T+/4C4YMneVSWMeG3kN37wzF+II2k9NNTC8NCb/3CECycb090Z6AWbSGnmNQDCMXh6T6SpiTdPRCQve+RpdB4ypNU9R23yuaa7p+14TFGU0Z/LzM2m/8wMhNefAb5/S/mbFGBhKjfzbYPCQFxS7WWj/u42tk3rvs2YWuqEVGvrcv8F8/n7HORz5s/bN+wyOu76abfTE+idBsTa5x1MibeRCRUROFxmy0LXL/V2gqK8vjtMX0+6IFSb3g7XF9+8cxp3c5BrrCLBtgFVtCWR0RJ5rAyxlpZdjorHm8H4Vj/FdumFspxqOb9PREn3jwVrcoa/fQKLGbiVdnRETWI56+XO4UOK+qWN+KmwzNn/xNtJpRw6rCJyiyDpqBq2JRQSQZWQqbyFQZK2RPeS5pC1OmPMGJsx9S2DJ/dAXaKlrUGRfIZ+unZ2dguSk+0J6zpFDX1FyNuu0tRMDYt9+Myi40o5yyRvTPgJX4ZQh1Sk59aCoEOK/GRQ96Ty9Rr9+B/vouzqjdnmBwYgNfR6p/dW+RVMXyN8JirKUeORuWYei02EoT1f4XzWJ03QcZ78Ou0Fj9c5sQ8C9lAI22+Ou4FhKBPnL1OY/p+H0pfzEKeRntKYdLTWRITxWhv2Kmwmxqvnz7dTn4UzaoqFUGw/WiMIPb8G9cwcp4qw+8UdZv0/zjug6eg5cPP1N7gcfXiKn/eIn9mzEnk2fISU5SdAQ99L1FSHkz3wgCJ0ywfA3ga6R5BNuOXoCxs99B5YEJiJKeRrW2vIfBUXuLANjSUmB4F9Mo/Myk5KicPrUZopMR1DkufrWNw6+8Ek47drTcXFt+8Hbh48N8xMAUUx94ADNfwYUDZ2g+p6rbfL+Uzws6Dgp67REWNKOBDMaeJmdAwr8giCl46QMoX9LP7itHFiR0RFiFXRwqojyKi18m0BMaTiGkDH94AMiYgoyUUC5iXYWVkJQpSbtUJO3MTwMabOuZwzlwadtZ6fEopDOD+SjxCQ2dnAlzdCSzgasjWriIURlKdBRRtp0VnwEkuMicf7MCTJHI2CbkYFhtE+Yd8BTaEzYQNOeNMYv6fProKaw790H3uQ39WnaAfaezTCic807WiY/3Ie+KRcws4duP3dt7Vfe1zSfld9xLmdpaREKyJTOzk4V9kQzOLKvMTsrhXzhdMoTvQT5gFl3jyaU4N0VfAiEq6s35TLSAbP00wRKQOQ6BVCUlVfIXRfEIZdDS3VM3k7mSPzcTwiJ8+4G7YMc6oIdbzfs31xcz8MAYdbLygAhVT7yX5GVnNwMFaV5KMlOQlZKDBJjIpAU9xAZiUmoyMpEGmuRfIiG2BJOjg6Y+5iO+Q+mLYUDRsDZqzFsXXzoLEJ7DAjmM0Tl+CewZP/v9ONUGidxKU1p9ikWCr/Pki18shYpnDlJiM5nmNrQWZp29i60q5R+p4X+Zq2RA1TKH7Hi07yHDSFQ5J843XGpEEt3ZSExu+5+M9DPxRzrJzegY/ithKhfcq4ckanlqoNhDZ+eNT/J5zO28jQXTvSp56FfovWyMnzG/RdlxaftyOmnGuR0zmQpRXZLC3PpWLJCIcrNxFFtCf1sg2cCpc7QuYQZfWgzAqWdWUvMqqzBvxtLMunYsuISV9y6U06fVceUtUYGQdYcWUPkv7n9nM5kQW4S1gj5t234U/sX/Wxo23L7tuaQSRMVoMhVM6jUNTGCa9Zbz6NmCdfLyvDZVy+r/0dZ8XmEWkev/ZPjce3aNWFfs68vb9DWv574rnKvs1Ib1P5pU80a4uPjhZO6/w82xFO8CEp8NwAAAABJRU5ErkJggg==";
	sprite.style.display="none";
	canvas.appendChild(sprite);
	div.appendChild(canvas);
	document.body.appendChild(div);
	var canvas = document.getElementById('minesweeperCanvas');
	canvas.oncontextmenu=function(){return false;}
	var div = document.getElementById('minesweeperDiv');
	var context = canvas.getContext('2d');
	var img=document.getElementById('minesweeperSprite');
	var pixels=[];
	var numArr=[];
	var flagArr=[];
	var W=w,H=h,N=n;
	var firstMove=true;
	var isReady=false;
	function initGame(w,h,n){
		initComponents(w,h);
		firstMove=true;
		isReady=false;
		drawBoard(w,h);
		generateBombs(n);
		countPixels();
		canvas.addEventListener('mouseup',clicked,false);
	}
	function initComponents(w,h){
		div.style.width=(25*w)+"px";
		div.style.height=(25*h)+"px";
		canvas.width=(25*w);
		canvas.height=(25*h);
	}
	function rearrange(w,h,n,c){
		console.log("rearrange Bombs occured!");
		firstMove=true;
		drawBoard(w,h);
		generateBombs(n);
		countPixels();
			if(pixels[c]>0 &&pixels[c]<9){
				drawDigit(c);
				firstMove=false;
				isReady=true;
			}
			else {
				firstMove=true;
				rearrange(w,h,n,c);
				isReady=false;
			}
	}
	function drawBoard(w,h){
		pixels=[];
		numArr=[];
		flagArr=[];
		W=w;
		H=h;
		context.clearRect(0,0,w*25,h*25);
			for(var i=0;i<h;i++)
				for(var j=0;j<w;j++){
					context.drawImage(img,0,0,25,25,j*25,i*25,25,25);
					pixels[i*w+j]=0;
					flagArr[i*w+j]=0;
					numArr.push(i*w+j);
				}
	}
	function generateBombs(n){
		var tmpArr=numArr;
		for(var i=0;i<n;i++){
			var rand=Math.floor(Math.random()*tmpArr.length);
			pixels[tmpArr[rand]]=9;
			tmpArr.splice(rand,1);
		}
	}
	function drawDigit(n){
			var pos=(pixels[n]+1)*25;
			context.drawImage(img,pos,0,25,25,(n-(Math.floor(n/W)*W))*25,Math.floor(n/W)*25,25,25);
			pixels[n]='X';
	}
	function neighbours(n){
		var nb=[];
		var hasLeft=false;
		var hasRight=false;
		var hasUp=false;
		var hasDown=false;
		if(n%W!=0){nb.push(n-1);hasLeft=true;}
		if((n+1)%W!=0){nb.push(n+1);hasRight=true;}
		if(n>=W){nb.push(n-W);hasUp=true;}
		if(n<W*(H-1)){nb.push(n+W);hasDown=true;}
		if(hasLeft && hasUp)nb.push(n-W-1);
		if(hasRight && hasUp)nb.push(n-W+1);
		if(hasLeft && hasDown)nb.push(n+W-1);
		if(hasRight && hasDown)nb.push(n+W+1);
		
		return nb;
	}
	function countPixels(){
		for(var i=0;i<W*H;i++){
			var tmpNb=neighbours(i);
			var bc=0;
			for(var j=0;j<tmpNb.length;j++)
				if(pixels[tmpNb[j]]==9)bc++;
			if(pixels[i]!=9)pixels[i]=bc;
			}
	}
	function drawEmpty(n){
			context.drawImage(img,25,0,25,25,(n-(Math.floor(n/W)*W))*25,Math.floor(n/W)*25,25,25);
	}
	function drawBomb(n){
		context.drawImage(img,300,0,25,25,(n-(Math.floor(n/W)*W))*25,Math.floor(n/W)*25,25,25);
	}
	function drawExploded(n){
		context.drawImage(img,250,0,25,25,(n-(Math.floor(n/W)*W))*25,Math.floor(n/W)*25,25,25);
	}
	function drawFlag(n){
			if(flagArr[n]==0 && pixels[n]!='X'){
				context.drawImage(img,275,0,25,25,(n-(Math.floor(n/W)*W))*25,Math.floor(n/W)*25,25,25);
				flagArr[n]=1;
			}
			else if(pixels[n]!='X'){
			context.drawImage(img,0,0,25,25,(n-(Math.floor(n/W)*W))*25,Math.floor(n/W)*25,25,25);
			flagArr[n]=0;
			}
	}
	function openNb(n){
		drawEmpty(n);
		pixels[n]='X';
		var bn=neighbours(n);
		for(var k=0;k<bn.length;k++)
			if(pixels[bn[k]]!='X')
				if(pixels[bn[k]]==0) 
					openNb(bn[k]);
				else
					if(flagArr[bn[k]]!=1)drawDigit(bn[k]);
	}
	function checkWinOrLose(n){
		if(pixels[n]==9 &&flagArr[n]==0){
					for(var i=0;i<W*H;i++)
						if(pixels[i]==9)
							drawBomb(i);
					drawExploded(n);
					console.log("You Looser!");
					canvas.removeEventListener('mouseup',clicked,false);
					alert("You Looser!");
					initGame(W,H,N);
		}
		var counter=0;
		for(var i=0;i<W*H;i++)
			if(pixels[i]=='X')counter++;
		if(counter==(W*H-N)){
			for(var i=0;i<W*H;i++)
				if(pixels[i]==9)
					drawBomb(i);
			console.log("You Won!");
			canvas.removeEventListener('mouseup',clicked,false);
			alert("You Won!");
			initGame(W,H,N);
		}
	}

	function getMousePos(canvas,evt) {
		var rect=canvas.getBoundingClientRect();
		return {x:evt.clientX-rect.left,y:evt.clientY-rect.top};
	}


	function clicked(e) {
		if(isReady || firstMove){
			var mousePos = getMousePos(canvas,e);
			var n=Math.floor(mousePos.y/25)*W+Math.floor(mousePos.x/25);
			e.preventDefault();
			if(e.button < 2){
				if(pixels[n]==0&&flagArr[n]==0)
					openNb(n);
				if(pixels[n]==9 && firstMove){
					rearrange(W,H,N,n);
					isReady=false;
				}
				if(pixels[n]>0 && pixels[n]<9 && flagArr[n]==0)
					drawDigit(n);
				if(pixels[n]!=9){
					firstMove=false;
					isReady=true;
				}
				checkWinOrLose(n);
			}
			else
				drawFlag(n);
		}
	}
	window.setTimeout(function(){initGame(w,h,n)},10);
}