var testArr = ["მოსამართლის სახელი", "ლტოლვილის სახელი", "საქმის ნომერი"]

function save (){
    var judge = document.getElementById('judge').value
    testArr[0]=judge
    var refugeeName = document.getElementById('refugeeName').value
    testArr[1]=refugeeName
    caseNum = document.getElementById('caseNum').value
    testArr[2] = caseNum
    console.log(testArr[2])

    //aq unda avawyo fuqcia romelic inputebidan aigebs monacemebs da Chasvams teqstshi, mosamarTlis saxeli da saqmis nomeri adgilze
}

const FakeDataJson = [
    {
      "id": "თბილისის საქალაქო სასამართლოს ადმინისტრაციულ"
      + "საქმეთა კოლეგიის მოსამართლე ქალბატონ ნათია ტოგონიძეს ფაზლე რაფი (პ/ნ 01860003981)",
      "name": "განცხადება",
      "country": "თქვენს წარმოებაშია საქმე №" + testArr[2] + ", ჩემი სარჩელი გამო, შსს მიგრაციის დეპარტამენტის წინააღმდეგ. გთხოვთ აღნიშნულ საქმეზე " +
      " გადმომცეთ ცნობა საქმის წარმოების მიმდინარეობის შესახებ, კერძოდ მასზედ რომ ჯერ კანონიერ ძალაში არაა შესული აღნიშნულ საქმეზე გადაწყვეტილება." +
      "  "+ 
      "   ",
      "age": testArr[1]
    },
   ]


const startPDf = () => {
    

    for(let i = 0; i <  1; i++){
            (function(){
                    setTimeout(() =>   {
                            let doc = new docx.Document();

                            const table = new docx.Table({
                                rows: [
                                    new docx.TableRow({
                                        children: [
                                            new docx.TableCell({
                                                children: [],
                                            }),
                                            new docx.TableCell({
                                                children: [],
                                            }),
                                            new docx.TableCell({
                                                children: [],
                                            }),
                                            new docx.TableCell({
                                                children: [],
                                            }),
                                        ],
                                    }),
                                    new docx.TableRow({
                                        children: [
                                            new docx.TableCell({
                                                children: [],
                                            }),
                                            new docx.TableCell({
                                                children: [new docx.Paragraph("Hello")]
                                                
                                            }),
                                            new docx.TableCell({
                                                children: [],
                                            }),
                                            new docx.TableCell({
                                                children: [],
                                            }),
                                        ],
                                    }),
                                    new docx.TableRow({
                                        children: [
                                            new docx.TableCell({
                                                children: [],
                                            }),
                                            new docx.TableCell({
                                                children: [],
                                            }),
                                            new docx.TableCell({
                                                children: [],
                                            }),
                                            new docx.TableCell({
                                                children: [],
                                            }),
                                        ],
                                    }),
                                    new docx.TableRow({
                                        children: [
                                            new docx.TableCell({
                                                children: [],
                                            }),
                                            new docx.TableCell({
                                                children: [],
                                            }),
                                            new docx.TableCell({
                                                children: [],
                                            }),
                                            new docx.TableCell({
                                                children: [],
                                            }),
                                        ],
                                    }),
                                ],
                            });
                                 
                            doc.addSection({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: ` ${"თბილისის საქალაქო სასამართლოს" + ""}`
                                                //ჩემი შეცვლილია არაიდან იღებს წევრებს და სვამს აქ
                                            })
                                        ]
                                    }),
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: ` ${"ადინისტრაციულ საქმეთა "}`
                                            })
                                        ]
                                    }),
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: ` ${"კოლეგიის მოსამართლე " +testArr[0]}`
                                            })
                                        ]
                                    }),
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: ` ${"მოსარჩელე   " +testArr[1]}`
                                            })
                                        ]
                                    }),
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: ` ${""}`
                                            })
                                        ]
                                    }),
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: ` ${""}`
                                            })
                                        ]
                                    }),
                                    
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: ` ${"                              " + FakeDataJson[i].name}`
                                            })
                                        ]
                                    }),
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: ` ${""}`
                                            })
                                        ]
                                    }),
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: ` ${""}`
                                            })
                                        ]
                                    }),
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: ` ${"თქვენს წარმოებაშია საქმე №" + testArr[2] + ", ჩემი სარჩელი გამო, შსს მიგრაციის დეპარტამენტის წინააღმდეგ. გთხოვთ აღნიშნულ საქმეზე " +
                                                " გადმომცეთ ცნობა საქმის წარმოების მიმდინარეობის შესახებ" +
                                                "  "}`
                                            })
                                        ]
                                    }),
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: ` ${""}`
                                            })
                                        ]
                                    }),
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: ` ${""}`
                                            })
                                        ]
                                    }),
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: ` ${"ხელმოწერა"}`
                                            })
                                        ]
                                    }),
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: ` ${testArr[1]}`
                                            })
                                        ]
                                    })
                                ]
                            })                        
                            doc.addSection({ children: [table] });
                            createDocument(doc, docx, `${FakeDataJson[i].id}-${FakeDataJson[i].name}`);
                    }, i * 2000)
            }())
    }   
}

const createDocument = (doc, docx, nameOfdoc) => {

    docx.Packer.toBlob(doc).then( blob => {
        saveAs(blob, `${nameOfdoc}.docx`)
    })
}


document.querySelector('#btn').addEventListener('click', () => {
     startPDf()
})