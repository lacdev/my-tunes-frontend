import { useNavigate } from 'react-router-dom'
import { useState, forwardRef } from 'react'
import { storage } from '../../utils/firebase'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'

import {
  Typography,
  Stack,
  Button,
  TextField,
  Input,
  Box,
  LinearProgress,
  Snackbar,
  Alert,
  AlertProps,
} from '@mui/material'

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={12} ref={ref} {...props} />
  }
)

export const AdminArtists = () => {
  const [imgUrl, setImgUrl] = useState(null)
  const [progresspercent, setProgresspercent] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [open, setOpen] = useState<boolean>(false)

  console.log({ imgUrl })
  const navigate = useNavigate()

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  //   onClick={() => navigate('order-summary')}
  // {replace: true} to replace the history in the stack

  //   const audio = new Audio(imgUrl)

  //   const start = () => {
  //     if (!imgUrl) return
  //     audio.play()
  //   }

  const handleSubmit = (e) => {
    e.preventDefault()
    const file = e.target[0]?.files[0]
    console.log(file)
    if (!file) return

    const storageRef = ref(storage, `images/artists/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )
        setIsUploading(true)
        setProgresspercent(progress)
      },
      (error) => {
        alert(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL)
          setIsUploading(false)
          setOpen(true)
        })
      }
    )
  }

  return (
    <>
      <h2>Admin Artists Page</h2>

      <form onSubmit={handleSubmit} className="form">
        <TextField
          type="file"
          sx={{
            minWidth: '500px',
          }}
        >
          Upload your track
        </TextField>
        {/* <Input type="file" /> */}
        <Button
          type="submit"
          variant="contained"
          sx={{
            height: '52px',
          }}
        >
          Upload
        </Button>
        {!imgUrl && isUploading && (
          <Box>
            <LinearProgress
              sx={{
                height: '24px',
                borderRadius: '8px',
              }}
              variant="determinate"
              color="success"
              value={progresspercent}
            />
          </Box>
        )}
      </form>

      {imgUrl && (
        <>
          {/* <img src={imgUrl} alt="uploaded file" height={200} /> */}
          <Box
            sx={{
              minWidth: '750px',
            }}
          >
            {/* <button onClick={start}>Play</button> */}

            <Snackbar
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              open={open}
              onClose={handleClose}
              autoHideDuration={3000}
            >
              <SnackbarAlert onClose={handleClose} severity="success">
                Song uploaded successfully
              </SnackbarAlert>
            </Snackbar>
          </Box>
        </>
      )}
    </>
  )
}
