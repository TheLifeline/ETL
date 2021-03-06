from . import db
file_type=["image","text","audio","video","zip","others"]

class File(db.Model):
    __tablename__ = 'table_file'
    id = db.Column(db.Integer, primary_key=True)
    caseID = db.Column(db.Integer)
    downloadPath = db.Column(db.String(600))
    fileName = db.Column(db.Text())
    fileOrigin = db.Column(db.Text())
    fileType = db.Column(db.Text())
    fileLable = db.Column(db.Text())
    fileDescribe = db.Column(db.Text())
    createtime = db.Column(db.DateTime())

    @property
    def serialize(self):
       """Return object data in easily serializable format"""
       return {
           "id": self.id,
           "caseID": self.caseID,
           "downloadPath": self.downloadPath,
           "fileName": self.fileName,
           "fileOrigin": self.fileOrigin,
           "fileType": self.fileType,
           "fileLable": self.fileLable,
           "fileDescribe": self.fileDescribe,
           "createtime": self.createtime
       }
    
    def save(self):
        db.session.add(self)
        db.session.commit()
        return self
